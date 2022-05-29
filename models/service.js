const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Ingrese nombre"],
    min: [2, "Muy corto"],
    max: [255, "Muy largo"],
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    index: true,
  },
  status: {
    type: String,
    default: "Active",
    enum: ["Active", "Inactive"],
  }
});

module.exports = mongoose.model("Servicio", serviceSchema);
