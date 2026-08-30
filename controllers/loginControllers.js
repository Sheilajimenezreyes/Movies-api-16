const userModel = require('../models/usersModel');
const bcrypt = require ('bcrypt');
const jwt = require ("jsonwebtoken");

const signup = async (req, res) => {
try {
    const {name, apellidos, password, email, role} = req.body;
    const newUser = {
        name,
        email,
        apellidos,
        password: await bcrypt.hash(password, 10),
        role
    }

    await userModel.create(newUser);
    res.status(200).send('Usuario creado correctamente');
} catch (error) {
    if(error.code === 11000){
        return res
        .status(500)
        .send({status: "failed", error: "El correo ya existe"})
    }
    res.status(500).send({status: 'Failed', error: error.message})
}
};

const login = async (req, res) =>{
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({email: email});
        if(!user){
            return res.status(404).send("Usuario o contraseña no validos");
        }
        const validatePassword = await bcrypt.compare(password, user.password)
            if(!validatePassword){
                return res.status(404).send("Usuario o contraseña no validos");
            }

            const payload = {
                _id: user._id,
                name: user.name,
                user: user.role,
            };
            const secret = ''
            const token = await jwt.sing(payload, secret, {expiresIn: "15min"})
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({status: 'Failed', error: error.message});
    }
};


module.exports = { signup, login };