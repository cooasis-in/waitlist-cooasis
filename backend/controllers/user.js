const User = require('../models/user');
const { sendVerificationEmail } = require('../utils/nodemailer');
const crypto = require('crypto');

exports.createUser = async (req, res) => {

    try {
        const { email, referrer } = req.body; // Extract referrer from request body if provided
        console.log(referrer);

        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }

        // Generate unique referral code
        const referralCode = crypto.randomBytes(4).toString('hex');

        // Create a new user with the referral code and referrer if provided
        const newUser = new User({ email, referralCode, referrer: referrer || null });
        await newUser.save();

        const content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

        // Send verification email
        ///  await sendVerificationEmail(email, content);

        // Return waitlist number and referral link
        const waitlistNumber = await User.countDocuments();
        const referralLink = `https://waitlist.coasis.app/refer?code=${referralCode}`;

        res.status(201).json({ message: 'User created successfully', user: newUser, waitlistNumber, referralLink });
    } catch (error) {
        console.error('Error creating user:', error); // Log the error
        if (error.code === 11000) {
            res.status(400).json({ message: 'Email already exists' });
        } else {
            res.status(500).json({ message: 'Server error', error });
        }
    }
};
