const User = require('../models/user');
const { sendVerificationEmail } = require('../utils/nodemailer');
const crypto = require('crypto');

exports.createUser = async (req, res) => {
    try {
        const { email, referrer } = req.body;

        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }

        // Check if the user already exists
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            const referralLink = `https://waitlist.coasis.app/refer?code=${existingUser.referralCode}`;
            return res.status(200).json({ 
                message: 'User already exists', 
                user: existingUser, 
                waitlistNumber: existingUser.waitlistNumber, 
                referralLink 
            });
        }

        // Generate unique referral code
        const referralCode = crypto.randomBytes(4).toString('hex');

        // Get the current waitlist number
        const waitlistNumber = await User.countDocuments() + 1;

        // Create a new user
        const newUser = new User({ 
            email, 
            referralCode, 
            referrer: referrer || null,
            waitlistNumber
        });
        await newUser.save();

        const content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

        await sendVerificationEmail(email, content);

        // Return waitlist number and referral link
        const referralLink = `https://waitlist.coasis.app/refer?code=${referralCode}`;

        res.status(201).json({ 
            message: 'User created successfully', 
            user: newUser, 
            waitlistNumber, 
            referralLink 
        });
    } catch (error) {
        console.error('Error creating user:', error);
        if (error.code === 11000) {
            res.status(400).json({ message: 'Email already exists' });
        } else {
            res.status(500).json({ message: 'Server error', error });
        }
    }
};