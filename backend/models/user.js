const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    referralCode: {
        type: String,
        required: true,
        unique: true
    },
    referrer: {
        type: String,
        default: null
    },
    waitlistNumber: {
        type: Number,
        required: true
    },
    otp: String,
    otpExpires: Date,
    isVerified: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('UserEmail', userSchema, 'userEmails');
