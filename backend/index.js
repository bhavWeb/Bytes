import express from "express"
import authRoute from "./routes/auth.route.js"
import cors from "cors"
import dotenv from 'dotenv';
dotenv.config();
import bodyParser from "body-parser"
import './Models/db.js'
import session from "express-session"
import MongoStore from "connect-mongo";
import nodemailer from "nodemailer"

const app = express();

app.use(session({
    store: MongoStore.create({
        mongoUrl: process.env.DATABASE_URL,
        ttl: 14 * 24 * 60 * 60 // expiration time in seconds (optional)
    }),
    secret: process.env.JWT_SECRET_KEY || 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        maxAge: 1000 * 60 * 10
    }
}));

//THIS IS A TEST ROUTE FOR TESTING OTPs
app.get('/send-test-email', async (req, res) => {
    try {
      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465, // SSL
        secure: true,
        auth: {
          user: process.env.SMTP_EMAIL, // Your Gmail address (from Render environment variables)
          pass: process.env.SMTP_PASSWORD, // Your Gmail password or app-specific password
        },
      });
  
      // Send test email
      let info = await transporter.sendMail({
        from: process.env.SMTP_USERNAME, // sender address
        to: 'vaibhav.bhandari222@gmail.com', // replace with the email you want to send the test to
        subject: 'Test Email from Render', // subject line
        text: 'This is a test email sent from the deployed service on Render', // plain text body
      });
  
      console.log('Message sent: %s', info.messageId);
      res.status(200).send('Test email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Failed to send test email');
    }
  });

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