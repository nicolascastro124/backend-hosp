const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rut: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
    service: [{ type: ObjectId, ref: "Servicio" }],
    descrip: {
        type: String,
    },

    acciones: {
        type: String,
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        index: true,
      },
    active: {
        type: Boolean,
        default: true,
    },
    status: {
        type: String,
        default: "Active",
        enum: ["Active", "Inactive"],
    },
});

module.exports = mongoose.model("Evento", eventSchema);
