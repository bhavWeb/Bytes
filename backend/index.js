import express from "express"
import authRoute from "./routes/auth.route.js"
import cors from "cors"
import dotenv from 'dotenv';
dotenv.config();
import bodyParser from "body-parser"
import './Models/db.js'
import session from "express-session"


const app = express();

app.use(session({
    secret: process.env.JWT_SECRET_KEY, // Replace with your own secret key
    resave: false, // Don't save session if unmodified
    saveUninitialized: true, // Save uninitialized session
    cookie: { secure: false } // Set to true if using HTTPS
  }));

app.use(express.json());
app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
    ? process.env.FRONTEND_URL   // Use the frontend URL in production
    : 'http://localhost:5173',    // Use localhost in development
    methods: ['GET', 'POST' , 'PUT'],
    allowedHeaders: ['Content-Type'],
    credentials : true,
}));
app.use(bodyParser.json())

app.use("/", authRoute )

const PORT = process.env.PORT || 8080

app.listen(PORT , ()=>{
    console.log(`Server Running on port ${PORT}`);
})