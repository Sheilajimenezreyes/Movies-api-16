const moviesModel = require('../models/moviesModel');

const getAllMovies = (req, res) => {
    res.status(200).send(moviesModel);
}

const getById = (req, res) => {
    const idPelicula = req.params.idPelicula;
    const pelicula = moviesModel.find((peli) => peli.id === parseInt(idPelicula));
    if (!pelicula) {
        return res.status(400).send("no se ha encontrado nada")
    }
    res.send(pelicula);
}

const deleteMovie = (req, res) => {
    const idPelicula = req.params.idPelicula;
    const index = moviesModel.findIndex((peli) => peli.id === parseInt(idPelicula));

    if (index === -1) {
        return res.status(400).send("No se ha encontrado la Peli");
    }
    moviesModel.splice(index, 1)

    res.status(200).send(moviesModel);
}
module.exports = { getAllMovies, getById, deleteMovie };