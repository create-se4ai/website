"use strict";
const { MongoClient, ObjectId } = require("mongodb");

require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getFormnew = async (req, res) => {
  const studentId = req.params.studentId;
  // const formId = req.params.formId;

  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();

    const db = client.db("se4ai");

  

    // Convert formId to ObjectId
    const objectId = new ObjectId(studentId);

    // const form = await db.collection("Form").findOne({ studentId:studentId});
    const form = await db.collection("Form").findOne({ studentId: objectId });

    console.log("Form", form);

    if (!form) {
      return res.status(404).json({ message: "Form not found" });
    }

    res.status(200).json({ message: "This is the Form", data: form });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error retrieving form" });
  } 
  // finally {
  //   await client.close(); // Use await when closing the connection
  // }
};

module.exports = { getFormnew };
