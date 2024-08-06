require("dotenv").config();
const { sendVerificationEmail } = require("./utils/nodemailer");

const testEmail = "shahbaz.khans976@gmail.com";
const testOTP = "4848";
const testContent =
  "Congratulations! You have successfully joined the waitlist.";

// Test sending an OTP
sendVerificationEmail(testEmail, testOTP)
  .then(() => {
    console.log("Test OTP email sent successfully.");
  })
  .catch((error) => {
    console.error("Error sending test OTP email:", error);
  });

// Test sending content
sendVerificationEmail(testEmail, null, testContent)
  .then(() => {
    console.log("Test content email sent successfully.");
  })
  .catch((error) => {
    console.error("Error sending test content email:", error);
  });
