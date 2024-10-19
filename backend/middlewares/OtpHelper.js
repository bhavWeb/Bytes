import crypto from "crypto"
import nodemailer from "nodemailer"

//Generate OTP

export const generateOTP = () => {
    const otp = crypto.randomInt(100000, 999999); // 6-digit OTP
    console.log(otp);
    return otp.toString();
};

// Send OTP to Email
export const sendOTPEmail = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use any email service you prefer
        host: "smtp.gmail.com",
        port: 587,
        secure: false,

        auth: {
            user: 'bytesOTP@gmail.com', // Your email address
            pass: 'lykd tfse ofvq qode',  // Your email password
        },
    });
    const mailOptions = {
        from: 'bytesOTP@gmail.com',
        to: email,
        subject: 'Welcome To Bytes',
        text: `Your OTP code is ${otp}`,
    };

    await transporter.sendMail(mailOptions);
};
