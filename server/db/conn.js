const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// dotenv.config();

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected!");
}).catch((err) => {
    console.log(err);
})
