const express = require('express');
const {createUser, getUserById, deleteUser, updateUser, addToFavourites} = require('../controllers/userController');
const { verifyToken, verifyAdmin } = require('../middlewares/auth');
const router = express.Router();

router.post('/user', createUser);
router.post('/user/:idMovie', verifyToken, addToFavourites);
router.get('/user/myProfile', verifyToken, getUserById);
router.delete('/user/:idUser', deleteUser);
router.patch('/user/:idUser', updateUser);

module.exports = router;