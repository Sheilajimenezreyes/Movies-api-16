const mongoose = require ("mongoose");

const dbUrl = process.env.MONGO_URL;
const connectToDataBase = async() =>{
try{
await mongoose.connect(dbUrl);
console.log('Conexion a MongoDB exitosa')
}catch(err){
    console.log("Error al conectar con MongoDB")
}
}

module.exports = connectToDataBase;