const express = require('express');
const {createUser, getUserById, deleteUser, updateUser} = require('../controllers/userController');
const router = express.Router();

router.post('/user', createUser);
router.get('/user/:idUser', getUserById);
router.delete('/user/:idUser', deleteUser);
router.patch('/user/:idUser', updateUser);

module.exports = router;