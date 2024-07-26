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

const sendVerificationEmail = async (email, otp = null, content = null) => {
    let emailContent;

    if (otp) {
        emailContent = `Your OTP is: ${otp}`;
    } else if (content) {
        emailContent = content;
    } else {
        throw new Error('Either OTP or content must be provided');
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Verify your email',
        text: emailContent
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
};

module.exports = { sendVerificationEmail };
