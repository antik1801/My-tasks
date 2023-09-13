const express = require("express");
const multer = require("multer");
const PDF = require("./model/PDF");

const app = express();
const PORT = 5000;

require("./config/db");

app.get("/", (req, res) => {
  res.status(200).send(["Server is working proper"]);
});

//file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const name = `${file.originalname}`;
    cb(null, name);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      // Accept only PDF files
      cb(null, true);
    } else {
      // Reject all other file types
      cb(new Error("Only PDF files are allowed."));
    }
  },
});

app.get("/upload", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/upload", upload.single("pdfFile"), async (req, res) => {
  // res.sendFile(__dirname + "/success.html");
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }

    // Create a new PDF document instance and set its properties
    const newPDF = new PDF({
      name: req.file.originalname, // You can choose to store the original file name
      path: `/uploads/${req.file.originalname}`,
      data: req.file.buffer, // Store the binary data of the uploaded PDF
    });
    await newPDF.save();

    res.sendFile(__dirname + "/success.html");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while saving the file.");
  }
});

app.get("/photo", (req, res) => {
  res.sendFile(__dirname + "/uploads/" + req.query.name);
});

app.use((err, req, res, next) => {
  res.status(500).send({ success: false, message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
