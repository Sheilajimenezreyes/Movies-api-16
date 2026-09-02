const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) =>{
    const token = req.header('auth-token');
    if(!token) return res.status(401).send("Acceso denegado");
    
    try {
        const payload = jwt.verify(token, process.env.SECRET_TOKEN);
        req.payload = payload;
        next();
    } catch (error) {
        res.status(500).send("Token caducado o no válido")
    }
}

const verifyAdmin = async (req, res, next) =>{
     const token = req.header('auth-token');
    if(!token) return res.status(401).send("Acceso denegado");
    
    try {
        const payload = req.payload;
        if(!payload || payload.role === "user") return res.status(401).send("No tienes permisos");
        next();
    } catch (error) {
        res.status(500).send("Token caducado o no válido")
    }
}


//ESTO ES OTRA OPCION A LO ANTERIOR
/*const verifyAdmin = async (req, res, next) =>{
     const token = req.header('auth-token');
    if(!token) return res.status(401).send("Acceso denegado");
    
    try {
        const payload = jwt.verify(token, process.env.SECRET_TOKEN);
        req.payload = payload;
        if(!payload || payload.role === "user") return res.status(401).send("No tienes permisos");
        next();
    } catch (error) {
        res.status(500).send("Token caducado o no válido")
    }
}*/

module.exports = {verifyToken, verifyAdmin}