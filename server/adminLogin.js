const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { MongoClient } = require("mongodb");

require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const adminLogin = async (req, res) => {
  const { username, password } = req.body;
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();
    const db = client.db("se4ai");

    // Find the admin with the provided username
    const admin = await db.collection("Admins").findOne({ username: username });

    if (admin) {
      // Compare the hashed password stored in the database with the provided password
      const match = await bcrypt.compare(password, admin.password);

      if (match) {
        // If the credentials are correct, create a JWT token
        const token = jwt.sign({ username }, process.env.JWT_SECRET);

        return res.status(200).json({
          message: "Sign-in successful",
          data: { token: token, adminId: admin._id },
        });
      }
    }

    // If the credentials are incorrect or the admin doesn't exist, return an error message
    return res.status(401).json({ message: "Invalid username or password" });
  } catch (error) {
    // Handle any errors that occur during the login process
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  } finally {
    // Close the MongoDB client connection
    if (client.isConnected()) {
      client.close();
    }
  }
};

module.exports = { adminLogin };
