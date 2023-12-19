const fs = require("fs");
const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();


const MONGO_URI = process.env.MONGO_URI;
console.log("MONGO_URI:", MONGO_URI);

const Admin = require("./data/Admin.json");
console.log("admins:", Admin);


const Student=require("./data/Students.json")
console.log("Students:", Student);


const formData = require("./data/FormData.json")
console.log("FormData:", FormData);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);

// const addAdmin = async () => {
//   try {
//     await client.connect();
//     const db = client.db("se4ai");
//     console.log("Connected to MongoDB!");

//     const AdminsWithId = Admin.map((admin) => {
//       const imagePath = `${__dirname}/${admin.Image}`;
//       const imageBuffer = fs.readFileSync(imagePath);
//       const imageBase64 = imageBuffer.toString("base64");

//       return {
//         ...admin,
//         _id: uuidv4(),
//         ImageBase64: imageBase64,
//       };
//     });

//     const result = await db.collection("Admins").insertMany(AdminsWithId);

//     console.log(`Successfully added ${result.insertedCount} Admins to MongoDB`);
//   } catch (err) {
//     console.log("Error:", err);
//   } finally {
//     await client.close();
//     console.log("Disconnected from MongoDB!");
//   }
// };

// addAdmin();
// const addStudent = async () => {
//   try {
//     await client.connect();
//     const db = client.db("se4ai");
//     console.log("Connected to MongoDB!");

//     const StudentsWithId = Student.map((student) => {
//       const imagePath = `${__dirname}/${student.img}`;
//       const imageBuffer = fs.readFileSync(imagePath);
//       const imageBase64 = imageBuffer.toString("base64");

//       return {
//         ...student,
//         _id: uuidv4(),
//         ImageBase64: imageBase64,
//       };
//     });

//     const result = await db.collection("Students").insertMany(StudentsWithId);

//     console.log(`Successfully added ${result.insertedCount} Students to MongoDB`);
//   } catch (err) {
//     console.error("Error:", err);
//   } finally {
//     await client.close();
//     console.log("Disconnected from MongoDB!");
//   }
// };

// // Call the addStudent function to add students to the database
// addStudent();

const addFormDataToMongoDB = async () => {
  try {
    await client.connect();
    const db = client.db("se4ai");
    console.log("Connected to MongoDB!");

    const uniqueId = uuidv4();

    // Assuming formData has the structure mentioned earlier
    const formattedFormData = {
      _id: uniqueId, // Use the unique ID as the document ID

      supervisorName: formData.supervisorName,
      degreeProgram: formData.degreeProgram,
      engineering: {
        soen691: { ...formData.engineering.soen691 },
      },
      socialAspects: {
        encs691: { ...formData.socialAspects.encs691 },
      },
      pdModules: {
        module1: { ...formData.pdModules.module1 },
        module2: { ...formData.pdModules.module2 },
      },
      industrialEmbedding: { ...formData.industrialEmbedding },
      webinarsSeminars: { ...formData.webinarsSeminars },
      specializationCourses: { ...formData.specializationCourses },
      leadershipMentorship: { ...formData.leadershipMentorship },
      otherActivity1: formData.otherActivity1,
      otherActivity2: formData.otherActivity2,
      otherActivity3: formData.otherActivity3,
    };

    const result = await db.collection("FormData").insertOne(formattedFormData);

    console.log("Successfully added FormData to MongoDB");
  } catch (err) {
    console.error("Error:", err);
  }
};

// Assuming you have a formData object ready to be inserted


// Call the addFormDataToMongoDB function to add form data to the database
addFormDataToMongoDB(formData);