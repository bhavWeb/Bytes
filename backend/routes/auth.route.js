import express from "express"
import { login, signup } from "../controllers/authController.js";
import { loginValidation, signupValidation } from "../middlewares/AuthValidation.js";

const Route = express.Router();

//Login

Route.post('/login',loginValidation,login);

//Signup

Route.post('/signup',signupValidation,signup);

export default Route