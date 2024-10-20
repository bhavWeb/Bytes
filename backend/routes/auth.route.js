import express from "express"
import { login, otp, signup } from "../controllers/authController.js";
import { loginValidation, signupValidation } from "../middlewares/AuthValidation.js";
import UserModel from "../Models/User.js";
const Route = express.Router();

//Login

Route.post('/login',loginValidation,login);

//Signup

Route.post('/signup',signupValidation,signup);

//OTP

Route.post('/verify-otp',otp );

export default Route