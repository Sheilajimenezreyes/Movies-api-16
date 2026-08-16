const express = require("express");
const router = express.Router();
const {getAllMovies, getById, deleteMovie, addMovie} = require('../controllers/moviesController')

router.get('/peliculas', getAllMovies);
router.get('/peliculas/:idPelicula', getById);
router.delete("/peliculas/:idPelicula", deleteMovie)
router.post("/peliculas", addMovie)
module.exports = router;