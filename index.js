// REQUERIMOS EL PAQUETE EXPRESS PARA CREAR LA APP

const express = require ("express");
const moviesRouter = require('./routes/moviesRouter');
require('dotenv').config()
const connectToDataBase = require ("./db/db")

//INICIALIZAMOS LA APP DE EXPRESS

const app = express();

// let peliculas = [
//    {id: 1, titulo: "Inception", director: "Christopher Nolan", año: 2010},
//    {id: 2, titulo: "Interestellar", director: "Christopher Nolan", año: 2014},
//   {id: 3, titulo: "The Dark Knight", director: "Christopher Nolan", año: 2008}
//];

//Midleware para manejar los datos que son JSON

app.use (express.json())

connectToDataBase(),

// app.get("/hola", (req, res) => {
//    res.send ("hello word");
// });

//Ruta para obtener todas las peliculas

// app.get("/peliculas", (req, res) => {
//    res.status(200).send(peliculas);
// })

//AÑADIR UNA PELICULA 
    
//app.post("/peliculas", (req, res) => {
//    const {titulo, director, año} = req.body;
//    if(!titulo || !director || !año){
//        return res.status(400).send("Todos los campos son necesarios");
//   }

//const nuevaPeli = {
//    id: peliculas.length +1,
//    titulo,
//    director,
//    año,
// };
// peliculas.push(nuevaPeli);
// res.status(200).send(nuevaPeli)
// })

//RUTA PARA OBTENER UNA PELICULA POR SU ID

// app.get("/peliculas/:idPelicula", (req, res) => {
//    const idPelicula = req.params.idPelicula;
//    const pelicula = peliculas.find((p) => p.id === parseInt(idPelicula))
//    res.send(pelicula)
//});

//Endpoint para devolver la pelicula filtrada por el nombre
// app.get("/nombrePeliculas/:nombre", (req, res) => {
//    const nombre = req.params.nombre;
//    const pelicula = peliculas.find((p) => p.titulo === nombre);
//    res.send(pelicula);
// })


//BORRAR UNA PELICULA POR EL ID

//app.delete("/peliculas/:idPelicula", (req, res) =>{
//    const idPeliculas = req.params.idPelicula;
//    const index = peliculas.findIndex((peli) => peli.id === parseInt(idPelicula));

//    if (index === -1){
//        return res.status(400).send ("No se ha encontrado la Peli");
//    }
//    peliculas.splice(index,1)
    
//    res.status(200).send(peliculas);
// })


//PUT O PATCH
//PUT ES PARA MODIFICAR TODOS LOS CAMPOS Y EL PATCH ES PARA MODIFICAL SOLO UN UNICO CAMPO

// app.put("/peliculas/:idPelicula", (req, res) => {
//    const idPelicula = req.params.idPelicula;
//    const index = peliculas.findIndex((peli) => peli.id === parseInt(idPelicula));

//    if(index === -1){
//        return res.status(400).send ("no se ha encontrado nada");
//  }

//   peliculas[index] = {
//        id: peliculas[index].id,
//        ...req.body
//    }
//    res.status(200).send(peliculas);
//})


//app.patch("/peliculas/:idPelicula", (req, res) => {
//    const idPelicula = res.params.idPelicula;
//    const {titulo, director, año} = req.body;

//    const pelicula = peliculas.find((peli) => peli.id === parseInt(idPelicula)); 

//    if(!pelicula){
//        return res.status(400).send ("no se ha encontrado nada")
//    }
//    if(titulo){
//        pelicula.titulo = titulo;
//    }
//    if(director){
//       pelicula.director = director;
//    }
//    if(año){
//        pelicula.año = año;
//    }
//    res.status(200).send(pelicula)

//});

app.use('/api', moviesRouter);


//INICIAMOS EL SERVIDOR EN EL PUERTO 3000
app.listen(3000, () => {
   console.log("server is running http://localhost:3000");
})