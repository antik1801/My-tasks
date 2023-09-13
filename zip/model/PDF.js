const mongoose = require("mongoose");

const pdfSchema = mongoose.Schema({
  name: String,
  path: String,
});

const PDF = new mongoose.model("PDF", pdfSchema);

module.exports = PDF;
