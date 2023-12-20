"use strict";
const { MongoClient } = require("mongodb");

require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getForm = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("se4ai");
    const forms = await db.collection("FormData").find().toArray();
    res.status(200).json({ data: forms });
  } catch (err) {
    console.error("Error retrieving form data:", err);
    res.status(500).json({ message: "Error retrieving the Form" });
  
  }
};

module.exports = { getForm };
