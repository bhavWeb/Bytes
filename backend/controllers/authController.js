import UserModel from "../Models/User.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { sendOTPEmail , generateOTP } from "../middlewares/OtpHelper.js"

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;


        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: 'User already exists, you can login', 
                success: false });
        }

        // Generate OTP
        const otp = generateOTP();

        // Send OTP to the user
        await sendOTPEmail(email, otp);

        
        const userModel = new UserModel({ name, email, password ,otp});
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201)
            .json({
                message: "OTP sent to your email. Please Verify .",
                success: true
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Error Sending OTP",
                success: false
            })
        console.log(err);
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        const errorMsg = 'Auth failed email or password is wrong';
        if (!user) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '24h' }
        )

        res.status(200)
            .json({
                message: "Login Success",
                success: true,
                jwtToken,
                email,
                name: user.name
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
        console.log(err);
    }
}

