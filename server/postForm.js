"use strict";

const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const postForm = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("se4ai");

    const formData = req.body;
    console.log('Received form data:', formData);

    // Validate and sanitize form data as needed
    // You can add your validation and sanitization logic here

    // Generate a unique ID for the form data entry
    const uniqueId = uuidv4();

    // Format formData before insertion
    const formattedFormData = {
      _id: uniqueId,
      supervisorName: formData.supervisorName || "",
      degreeProgram: formData.degreeProgram || "",
      engineering: { soen691: { ...formData.engineering?.soen691 } },
      socialAspects: { encs691: { ...formData.socialAspects?.encs691 } },
      pdModules: {
        module1: { ...formData.pdModules?.module1 },
        module2: { ...formData.pdModules?.module2 },
      },
      industrialEmbedding: { ...formData.industrialEmbedding },
      webinarsSeminars: { ...formData.webinarsSeminars },
      specializationCourses: { ...formData.specializationCourses },
      leadershipMentorship: { ...formData.leadershipMentorship },
      otherActivity1: formData.otherActivity1 || "",
      otherActivity2: formData.otherActivity2 || "",
      otherActivity3: formData.otherActivity3 || "",
    };

    // Insert formattedFormData into the "FormData" collection
    const result = await db.collection("FormData").insertOne(formattedFormData);

    // Check if the insertion was successful
    if (result.acknowledged) {
      const insertedData = await db.collection("FormData").findOne({ _id: uniqueId });
      res.status(201).json({
        message: "Form data added successfully",
        data: insertedData,
      });
    } else {
      console.error("Error adding form data: Insertion failed");
      res.status(500).json({ message: "Error adding form data" });
    }
  } catch (err) {
    console.error("Error adding form data:", err);
    res.status(500).json({ message: "Error adding form data" });
  }
};

module.exports = { postForm };
