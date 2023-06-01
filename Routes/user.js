const express = require('express');
const router = express.Router();
const { createUser, getUser, signUpUser } = require('../Controller/user');
const { validateToken } = require('../Utils/validation_jwt');

router.post('/create', createUser);
router.get('/getuser/:id', validateToken, getUser)
router.post('/signup', signUpUser)

module.exports = router;