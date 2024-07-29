const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create', userController.createUser);
router.post('/getUser', userController.getUser);
router.get('/',userController.getUsers)
router.delete('/delete',userController.deleteAll)

module.exports = router;
