const { MongoClient, ObjectId } = require("mongodb");

require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const getStudent = async (req, res) => {
  const studentId = req.params.studentId;

  // Validate ObjectId format
  if (!ObjectId.isValid(studentId)) {
    return res.status(400).json({ message: "Invalid studentId" });
  }

  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();
    const db = client.db("se4ai");

    // Convert studentId to ObjectId
    const objectId = new ObjectId(studentId);

    // Use parameterized query to find student by _id
    const student = await db.collection("Students").findOne({ _id: objectId });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "This is the Student", data: student });
  } catch (err) {
    console.error("Error retrieving student:", err);
    res.status(500).json({ message: "Error retrieving student" });
  } finally {
    client.close();
  }
};

module.exports = { getStudent };
