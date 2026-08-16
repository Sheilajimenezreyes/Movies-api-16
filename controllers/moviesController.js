const MovieModel = require('../models/moviesModel');

const getAllMovies = async (req, res) => {
    try {
        const movies = await MovieModel.find();
        res.status(200).send(movies);
    } catch (error) {
        res.status(500).send({status: 'Failed', error: error.message})
    }
}

const getById = (req, res) => {
//    const idPelicula = req.params.idPelicula;
//    const pelicula = moviesModel.find((peli) => peli.id === parseInt(idPelicula));
//    if (!pelicula) {
//        return res.status(400).send("no se ha encontrado nada")
//    }
//    res.send(pelicula);
}

const deleteMovie = (req, res) => {
//    const idPelicula = req.params.idPelicula;
//    const index = moviesModel.findIndex((peli) => peli.id === parseInt(idPelicula));

//    if (index === -1) {
//        return res.status(400).send("No se ha encontrado la Peli");
//    }
//    moviesModel.splice(index, 1)

//   res.status(200).send(moviesModel);
}


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

module.exports = { getAllMovies, getById, deleteMovie, addMovie }