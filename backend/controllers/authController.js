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
                .json({ message: 'Email already exists, you can login', 
                success: false });
        }

        //Generate OTP

        const otp = generateOTP();

        // Temporarily store user info and OTP in session
        req.session.tempUser = { name, email, password, otp };

        // Send OTP via email
        await sendOTPEmail(email, otp);
        console.log("this console log is in signup controller, this ensures that render shows the console logs");
        // const userModel = new UserModel({ name, email, password ,otp});
        // userModel.password = await bcrypt.hash(password, 10);
        // await userModel.save();
        // res.status(201)
        //     .json({
        //         message: "OTP sent to your email. Please Verify .",
        //         success: true
        //     })

        res.status(200).json({ message: 'OTP sent to email' });
    } catch (err) {
        res.status(500)
            .json({
                message: "Sign Up Failed",
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

export const otp = async (req,res)=>{

    const { otp } = req.body;

    // Check if OTP is provided and not empty
    if (!otp || otp.trim() === "") {
        return res.status(400).json({ message: "OTP is required" });
    }

    try {

        // Find the user by email
        // const user = await UserModel.findOne({ email });

        // if (!user || user.otp !== otp) {
        //     return res.status(400).json({ message: 'Invalid or expired OTP' });
        // }

        // Clear the OTP after verification
        // user.otp = null;  // Clear the OTP
        // await user.save();

        // Generate JWT token (optional)
        // const token = jwt.sign({ email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });

        // res.status(200).json({ message: 'OTP verified successfully', token });

        
        const tempUser = req.session.tempUser; // Check if the session contains temporary user info

        if(!tempUser){
            return res.status(400).json({message : "Session expired or no User Data Found"})
        }

        //Verify OTP
        if(tempUser.otp !== otp){
            return res.status(400).json({message : "Invalid OTP"})
        }

        const userModel = new UserModel({ 
            name : tempUser.name,
            email :tempUser.email, 
            password :tempUser.password
        });

        userModel.password = await bcrypt.hash(tempUser.password, 10);
        await userModel.save();

        // Clear session after successful signup
        req.session.tempUser = null;
        
        res.status(201)
            .json({
                message: "OTP Verified , SignUp Successfull.",
                success: true
            })


    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}
