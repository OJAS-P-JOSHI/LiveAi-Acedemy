const express = require('express');
const { registerUser, googleLogin } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/google', googleLogin);

module.exports = router;
