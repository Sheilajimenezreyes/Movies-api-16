const express = require("express");
const router = express.Router();
const {getAllMovies, getById, deleteMovie, addMovie, updateMovie} = require('../controllers/moviesController')

router.get('/movie', getAllMovies);
router.get('/movie/:idMovie', getById);
router.delete("/movie/:idMovie", deleteMovie)
router.post("/movie", addMovie)
router.patch("/movie/:idMovie", updateMovie)
module.exports = router;