const userModel = require('../models/usersModel');
const bcrypt = require ('bcrypt');

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
    console.log(newUser.password)
    await userModel.create(newUser);
    res.status(200).send('Usuario creado correctamente');
} catch (error) {
    res.status(500).send({status: 'Failed', error: error.message})
}
};

module.exports = { signup }