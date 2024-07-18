const User = require('../models/user');
const { sendVerificationEmail } = require('../utils/nodemailer');

exports.createUser = async (req, res) => {
    try {
        const { email, content } = req.body;

        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }

        const newUser = new User({ email });
        await newUser.save();

        await sendVerificationEmail(email, content);

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ message: 'Email already exists' });
        } else {
            res.status(500).json({ message: 'Server error', error });
        }
    }
};
