import express from "express";
import mongoose from "mongoose";
import cloudinary from "cloudinary";
import {config} from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";

import userRoute from "./routes/user.js";
import {connectDB} from "./db/conn.js";
config();
connectDB();

// require("./db/conn");

const port = 8001;


cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key: process.env.CLOUDINARY_CLIENT_API,
    api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
  });

  
const app = express();

//middlewares:

app.use(express.urlencoded({ extended:true }))
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}));

app.use('/api/v1/users',userRoute)

app.get("/", (req, res) => {
    res.send("Hey from backend");
});

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})