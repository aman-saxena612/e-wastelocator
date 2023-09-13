const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
require("./db/conn");

const port = 8001;
const app = express();

//middlewares:
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}));

app.get("/", (req, res) => {
    res.send("Hey from backend");
});

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})