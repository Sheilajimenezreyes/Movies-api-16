const userModel = require('../models/usersModel');

const createUser = async (req, res) => {
try {
    const user = req.body;
    await userModel.create(user);
    res.status(200).send("La user se ha creado correctamente")
} catch (error) {
    res.status(500).send({status: 'Failed', error: error.message})
}
}

module.exports = {createUser};