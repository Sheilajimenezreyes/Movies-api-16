const mongoose = require("mongoose");
const { kMaxLength } = require("node:buffer");
const Schema = mongoose.Schema;

const movieSchema = new Schema ({
    titulo: {
        type: String,
        required: [true, "El tÍtulo es requerido"],
        minLength: [5, "El titulo debe tener al menos 5 carácteres"],
        maxLength: [40, "El titulo no debe tener mas de 40 carácteres"],
        trim: true
    },
    director: {
        type: String
    },
    year: {
        type: Number
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

const movieModel = mongoose.model("Movie", movieSchema, "movie")

module.exports = movieModel




