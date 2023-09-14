import express from "express";
import mongoose from "mongoose";
import {config} from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";

import userRoute from "./routes/user.js";
import {connectDB} from "./db/conn.js";
config();
connectDB();

// require("./db/conn");

const port = 8001;

const app = express();

//middlewares:
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