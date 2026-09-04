const userModel = require('../models/usersModel');

const createUser = async (req, res) => {
try {
    const user = req.body;
    await userModel.create(user);
    res.status(200).send("La user se ha creado correctamente")
} catch (error) {
    res.status(500).send({status: 'Failed', error: error.message})
}
};

const getUserById = async (req, res) =>{
    try {
        const idUser = req.payload._id;
        const user = await userModel.findById(idUser);
        if(!user){
        return res.status(404).send("User no encontrado");
    } 
    res.status(200).send(user);
}catch (error) {
res.status(500).send({status: 'Failed', error: error.message})
}
};

const deleteUser = async (req, res) =>{
try {
    const idUser = req.params.idUser;
    const user = await userModel.findByIdAndDelete(idUser);
    if(!user){
        return res.status(404).send("User no encontrado");
    } 
    res.status(200).send(user)
} catch (error) {
    res.status(500).send({status: 'Failed', error: error.message})
}
};

const updateUser = async (req, res) =>{
    try {
        const idUser = req.params.idUser;
        const user = await userModel.findById()
        if(!user){
        return res.status(404).send("User no encontrado");
    } 
    res.status(200).send('Se ha actualizado correctamente')
    } catch (error) {
        res.status(500).send({status: 'Failed', error: error.message})
    }
};

const addToFavourites = async (req, res) =>{
    try {
        const { idMovie } = req.params;
        const idUser = req.payload._id;
        if(!user){
            res.status(200).send('Usuario no encontrado');
        }
        const user = await UserModel.findById(idUser);
        const isIncluded = user.favoritas.includes(idMovie);
        if(isIncluded){
            res.status(200).send('Ya tengo esa peli');
        }
        user.favoritas.push(idMovie);
        user.save()
        return res.status(200).send(user);
    } catch (error) {
        res.status(500).send({status: 'Failed', error: error.message})
    }
};



module.exports = {createUser, getUserById, deleteUser, updateUser, addToFavourites};