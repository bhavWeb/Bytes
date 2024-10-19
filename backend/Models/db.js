import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const mongo_url = process.env.DATABASE_URL;

mongoose.connect(mongo_url)
.then(()=>{
    console.log('MongoDb Connected ...');
}).catch((err)=>{
    console.log('MongoDb Connection Error : ' , err);
})