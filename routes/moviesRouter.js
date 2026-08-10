const express = require("express");
const router = express.Router();
const {getAllMovies, getById, deleteMovie} = require('../controllers/moviesController')

router.get('/peliculas', getAllMovies);
router.get('/peliculas/:idPelicula', getById);
router.delete("/peliculas/:idPelicula", deleteMovie)
module.exports = router;