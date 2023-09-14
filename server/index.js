const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const { getNearbyPlaces } = require("./routes/anything");
// const googlePlaces = require(getNearbyPlaces);
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

// app.get('/google-places', (req, res) => {
//    getNearbyPlaces()
//       .then((data) => {
//         res.json(data); // Send the data as JSON in the response
//       })
//       .catch((error) => {
//         res.status(500).json({ error: 'Internal server error' });
//       });
//   });

  // Replace this URL with the API endpoint you want to fetch data from
const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=ewaste&location=23.3439232%2C85.311488&radius=2000&type=e_waste&key=${process.env.GOOGLE_API_KEY}`;

let responseData = null; // Initialize a variable to store the response data

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Store the API response data in the variable
    responseData = data;
    
    // Now you can work with the responseData variable
    console.log('Data from the API:', responseData);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// At this point, responseData will contain the API response data if the request was successful.

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})