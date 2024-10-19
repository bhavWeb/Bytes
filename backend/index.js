import express from "express"
import authRoute from "./routes/auth.route.js"
import cors from "cors"
import dotenv from 'dotenv';
dotenv.config();
import bodyParser from "body-parser"
import './Models/db.js'

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
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