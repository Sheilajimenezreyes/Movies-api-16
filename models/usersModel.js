const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    name:{
        type: String,
        required: [true, "El nombre es obligatorio"]
    },
    apellidos:{
        type: String,
        required: [true, "El apellido es Obligatorio"]
    },
    password:{
        type: String,
        required:[true, "La contraseña es obligatoria"]
    },
    role:{
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    favoritos:{
        type:[mongoose.Schema.Types.ObjectId],
        ref: "Movie",
    }
});

const userModel = mongoose.model('User', userSchema, "user");
module.exports = userModel;