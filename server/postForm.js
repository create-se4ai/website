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

  // Destructure relevant properties directly from req.body with default values or optional chaining
  const {
    degreeProgram = "",
    supervisorName = "",
    startDate1 = "",
    finishDate1 = "",
    passFail1 = "",
    startDate2 = "",
    finishDate2 = "",
    passFail2 = "",
    Module1 = [],
    Module2 = [],
    internship1 = [],
    internship2 = [],
    webinarsAndSeminars1 = [],
    webinarsAndSeminars2 = [],
    webinarsAndSeminars3 = [],
    webinarsAndSeminars4 = [],
    webinarsAndSeminars5 = [],
    specializationCourses1 = [],
    specializationCourses2 = [],
    LMActivity1 = [],
    LMActivity2 = [],
    OtherActivity1 = {},
    OtherActivity2 = {},
    OtherActivity3 = {},
  } = req.body;

  console.log('Received form data:', req.body);

    // Generate a unique ID for the form data entry
    const uniqueId = uuidv4();

    // Format formData before insertion
    const newForm = {
      _id: uniqueId,
      supervisorName,
      degreeProgram,
    
      startDate1,
      finishDate1,
      passFail1,
    
      startDate2,
      finishDate2,
      passFail2,
    
      Module1: Module1.map((item) => ({
        selectedOption: item.selectedOption || "",
        startDate: item.startDate || "",
        finishDate: item.finishDate || "",
        passFail: item.passFail || "",
      })),
    
      Module2: Module2.map((item) => ({
        selectedOption: item.selectedOption || "",
        startDate: item.startDate || "",
        finishDate: item.finishDate || "",
        passFail: item.passFail || "",
      })),
    
      internship1: internship1.map((item) => ({
        organizationName: item.organizationName || "",
        supervisorName: item.supervisorName || "",
      })),
    
      internship2: internship2.map((item) => ({
        organizationName: item.organizationName || "",
        supervisorName: item.supervisorName || "",
      })),
    
      webinarsAndSeminars1: webinarsAndSeminars1.map((item) => ({
        title: item.title || "",
        eventType: item.eventType || "",
        eventLocation: item.eventLocation || "",
        date: item.date || "",
        location: item.location || "",
      })),
    
      webinarsAndSeminars2: webinarsAndSeminars2.map((item) => ({
        title: item.title || "",
        eventType: item.eventType || "",
        eventLocation: item.eventLocation || "",
        date: item.date || "",
        location: item.location || "",
      })),
    
      webinarsAndSeminars3: webinarsAndSeminars3.map((item) => ({
        title: item.title || "",
        eventType: item.eventType || "",
        eventLocation: item.eventLocation || "",
        date: item.date || "",
        location: item.location || "",
      })),
    
      webinarsAndSeminars4: webinarsAndSeminars4.map((item) => ({
        title: item.title || "",
        eventType: item.eventType || "",
        eventLocation: item.eventLocation || "",
        date: item.date || "",
        location: item.location || "",
      })),
    
      webinarsAndSeminars5: webinarsAndSeminars5.map((item) => ({
        title: item.title || "",
        eventType: item.eventType || "",
        eventLocation: item.eventLocation || "",
        date: item.date || "",
        location: item.location || "",
      })),
    
      specializationCourses1: specializationCourses1.map((item) => ({
        title: item.title || "",
        startDate: item.startDate || "",
        finishDate: item.finishDate || "",
        passFail: item.passFail || "",
      })),
    
      specializationCourses2: specializationCourses2.map((item) => ({
        title: item.title || "",
        startDate: item.startDate || "",
        finishDate: item.finishDate || "",
        passFail: item.passFail || "",
      })),
    
      LMActivity1: LMActivity1.map((item) => ({
        title: item.title || "",
        startDate: item.startDate || "",
        finishDate: item.finishDate || "",
        passFail: item.passFail || "",
      })),
    
      LMActivity2: LMActivity2.map((item) => ({
        title: item.title || "",
        startDate: item.startDate || "",
        finishDate: item.finishDate || "",
        passFail: item.passFail || "",
      })),
    
      OtherActivity1: {
        title: OtherActivity1.title || "",
        details: OtherActivity1.details || "",
      },
    
      OtherActivity2: {
        title: OtherActivity2.title || "",
        details: OtherActivity2.details || "",
      },
    
      OtherActivity3: {
        title: OtherActivity3.title || "",
        details: OtherActivity3.details || "",
      },
    };
    
    // Insert formattedFormData into the "FormData" collection
    const result = await db.collection("FormData").insertOne(newForm);

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
  } finally {
    await client.close();
  }
};

module.exports = { postForm };
