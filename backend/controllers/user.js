const User = require('../models/user');
const { sendVerificationEmail } = require('../utils/nodemailer');
const crypto = require('crypto');

exports.createUser = async (req, res) => {
    try {
        const { email, referrer } = req.body;

        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }

        let existingUser = await User.findOne({ email });
        if (existingUser) {
            if (existingUser.isVerified) {
                const referralLink = `https://waitlist.coasis.app/refer?code=${existingUser.referralCode}`;
                return res.status(200).json({
                    message: 'User already exists',
                    user: existingUser,
                    waitlistNumber: existingUser.waitlistNumber,
                    referralLink,
                    isVerified: true
                });
            } else {
                // Delete the existing user if not verified
                await User.deleteOne({ email: existingUser.email });
            }
        }
        const otp = Math.floor(1000 + Math.random() * 9000).toString();
        const otpExpires = Date.now() + 10 * 60 * 1000;
        const referralCode = crypto.randomBytes(4).toString('hex');
        const waitlistNumber = 0
        const newUser = new User({
            email,
            otp,
            otpExpires,
            referralCode,
            waitlistNumber
        });

        await newUser.save();

        await sendVerificationEmail(email, otp);
        console.log(req.session);
        res.status(200).json({ message: 'OTP sent to your email. Please verify your email to complete the registration.' });

    } catch (error) {
        console.error('Error creating user:', error);
        if (error.code === 11000) {
            res.status(400).json({ message: 'Email already exists' });
        } else {
            res.status(500).json({ message: 'Server error', error });
        }
    }
};

module.exports.verifyOTP = async (req, res) => {
    const { otpCode, email, referrer } = req.body;
    console.log(otpCode);
    console.log(email);
    try {
        const user = await User.findOne({ email });

        if (user && user.otp === otpCode && user.otpExpires > Date.now()) {
            await User.deleteOne({ email });
            const referralCode = crypto.randomBytes(4).toString('hex');
            const waitlistNumber = await User.countDocuments() + 1;
            const newUser = new User({
                email,
                referralCode,
                referrer: referrer || null,
                waitlistNumber,
                isVerified: true
            });
            user.isVerified = true;
            await newUser.save();
            const content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
            await sendVerificationEmail(email, content);

            // Return waitlist number and referral link
            const referralLink = `https://waitlist.coasis.app/refer?code=${referralCode}`;

            res.status(200).json({
                message: 'User created successfully',
                user: newUser,
                waitlistNumber,
                referralLink

            });
        } else {
            console.log("wrong OTP")
            res.status(400).json({ error: 'Invalid OTP. Please try again.' });
        }
    } catch (error) {
        console.error("Error during OTP verification:", error);
        res.status(500).json({ error: 'Server error. Please try again later.' });
    }
}

module.exports.resendOtp = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Generate new OTP
        const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
        const otpExpires = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes

        // Update user's OTP and OTP expiration
        user.otp = newOtp;
        user.otpExpires = otpExpires;
        await user.save();

        // Send the new OTP via email (implement your email sending logic here)
        await sendVerificationEmail(email, newOtp);
        res.status(200).json({ message: 'OTP has been resent successfully' });
    } catch (error) {
        console.error('Error resending OTP:', error);
        res.status(500).json({ error: 'Failed to resend OTP. Please try again later.' });
    }
};

