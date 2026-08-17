const mongoose = require('mongoose');
const schema = mongoose.schema;

const userSchema = new schema({
    name:{
        type: String,
        require: [true, "El nombre es obligatorio"]
    },
    apellidos:{
        type: String,
        require: [true, "El apellido es Obligatorio"]
    },
    pasword:{
        type: String,
        require:[true, "La contraseña es obligatoria"]
    },
    role:{
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    favoritos:{
        type:[mongoose.schema.Types.ObjectId],
        ref: "movie",
    }
});

const userModel = mongoose.model('User', "userSchema", "user");
module.exports = userModel;