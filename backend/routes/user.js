
const express = require('express');
const router = express.Router();
const { createUser, resendOtp, verifyOTP } = require('../controllers/user');

router.post('/users', createUser);
router.post('/resend-otp', resendOtp);
router.post('/verify-email', verifyOTP);

module.exports = router;
