import express from "express"
import { login, signup } from "../controllers/authController.js";
import { loginValidation, signupValidation } from "../middlewares/AuthValidation.js";
import UserModel from "../Models/User.js";

const Route = express.Router();

//Login

Route.post('/login',loginValidation,login);

//Signup

Route.post('/signup',signupValidation,signup);

//OTP

Route.post('/verify-otp', async (req, res) => {
    const { email, otp } = req.body;

    try {
        // Find the user by email
        const user = await UserModel.findOne({ email });

        if (!user || user.otp !== otp) {
            return res.status(400).json({ message: 'Invalid or expired OTP' });
        }

        // Clear the OTP after verification
        user.otp = null;  // Clear the OTP
        await user.save();

        // Generate JWT token (optional)
        // const token = jwt.sign({ email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });

        res.status(200).json({ message: 'OTP verified successfully', token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default Route