require('dotenv').config();
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

const transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    logger: true,
    debug: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnAuthorized: true
    }
}));

const sendVerificationEmail = async (email, content) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Verify your email',
        text: content
    };

    const info = await transporter.sendMail(mailOptions);

};


module.exports = { sendVerificationEmail };