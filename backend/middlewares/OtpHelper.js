import crypto from "crypto"
import nodemailer from "nodemailer"

//Generate OTP

export const generateOTP = () => {
    const otp = crypto.randomInt(100000, 999999); // 6-digit OTP
    console.log("Console Logging On Generate OTP function , if this runs, this means generateOTP function is getting called");
    console.log(otp);
    return otp.toString();
};

// Send OTP to Email
export const sendOTPEmail = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use any email service you prefer
        host: "smtp.gmail.com",
        port: 465,
        secure: true,

        auth: {
            user: process.env.SMTP_EMAIL, // Your email address
            pass: process.env.SMTP_PASSWORD,  // Your email password
        },
    });

    console.log("this log is to check if sendOTPEmail function is working properly");
    const mailOptions = {
        from: process.env.SMTP_USERNAME,
        to: email,
        subject: 'Welcome To Bytes',
        text: `Your OTP to Sigup is ${otp}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("OTP email sent successfully.");
    } catch (error) {
        console.error("Error sending OTP email:", error.message);
        throw new Error("Failed to send OTP email.");
    }

};
