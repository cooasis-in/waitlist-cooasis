
const express = require('express');
const router = express.Router();
const { createUser, resendOtp, verifyOTP, updateUserPhoneNumber } = require('../controllers/user');

router.post('/users', createUser);
router.post('/resend-otp', resendOtp);
router.post('/verify-email', verifyOTP);
router.post('/updatePhoneNumber', updateUserPhoneNumber);

module.exports = router;
