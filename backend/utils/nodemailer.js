require("dotenv").config();
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const fs = require("fs");
const path = require("path");

const transporter = nodemailer.createTransport(
  smtpTransport({
    host: "smtp.zoho.in",
    port: 465,
    secure: true,
    logger: true,
    debug: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: true,
    },
    // Add these settings to enforce IPv4
    socketTimeout: 10000,
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    // Ensure the correct family setting for IPv4
    family: 4,
  })
);

const sendVerificationEmail = async (email, otp = null, content = null) => {
  let emailContent;
  let emailSubject = "Verify your email";

  if (otp) {
    emailContent = `Your OTP is: ${otp}`;
  } else if (content) {
    emailContent = fs.readFileSync(
      path.join(__dirname, "emailTemplates", "waitlistEmailTemplate.html"),
      "utf8"
    );
    emailSubject = "Hurray! You are on the waitlist!!!";
  } else {
    throw new Error("Either OTP or content must be provided");
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: emailSubject,
    html: emailContent,
    text: emailContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = { sendVerificationEmail };
