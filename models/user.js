const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(

    {
        name : {
            type: String
        },
        email: {
            type: String,
            required: [true, 'email es necesario'],
            index: true,
        },
        password: {
            type: String,
            required: [true, 'La contraseña es obligatoria']
        },
        role: {
            type: String,
            default: "subscriber",
        },
        service: [{ type: ObjectId, ref: "Servicio"}]
         
    }

);

module.exports = mongoose.model("Usuario", userSchema);