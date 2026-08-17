const movieModel = require('../models/moviesModel');
const MovieModel = require('../models/moviesModel');

const getAllMovies = async (req, res) => {
    try {
        const movies = await MovieModel.find();
        res.status(200).send(movies);
    } catch (error) {
        res.status(500).send({status: 'Failed', error: error.message})
    }
}

const getById = async (req, res) => {
    try {
        const idMovie = req.params.idMovie;
        const movie = await movieModel.findById(idMovie);
        if(!movie){
            return res.status(404).send("Pelicula no encontrada")
        }
        res.status(200).send(movie);
    } catch (error) {
        res.status(500).send({status: 'Failed', error: error.message})
    }
}

const deleteMovie = async (req, res) => {
try {
    const idMovie = req.params.idMovie;
    const movie = await movieModel.findByIdAndDelete(idMovie);
    if(!movie){
        return res.status(404).send("Pelicula no encontrada")
    }
        res.status(200).send("Se ha borrado correctamente");
} catch (error) {
    res.status(500).send({status: 'Failed', error: error.message})
}
};


const addMovie = async (req, res) => {
    try{
        const movieData = req.body;
        await MovieModel.create(movieData)
        res.status(200).send("La peli se ha creado correctamente")
    }
    catch{
        res.status(500).send({status: 'Failed', error: error.message})
    }
}


const updateMovie = async (req, res) => {
   try {
    const idMovie = req.params.idMovie;
    const newMovie = req.body;
    const movie = await movieModel.findByIdAndUpdate(idMovie, newMovie, {new:true});
    if(!movie){
        return res.status(404).send("Pelicula no encontrada");
    }
    res.status(200).send(movie);
   } catch (error) {
    res.status(500).send({status:'Failed', error: error.message})
   }
}

module.exports = { getAllMovies, getById, deleteMovie, addMovie, updateMovie }