const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const router = express.Router();
const axios = require('axios');
dotenv.config();
require("./db/conn");
const getPlaces=require("./routes/getLocations");

const port = 8001;
const app = express();

//middlewares:
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}));



app.use("/api",getPlaces);

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
  
  
  // Utility function to get nearby places
  function getNearbyPlaces() {
    const apiUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
    const apiKey = process.env.GOOGLE_API_KEY;
    
    const queryParams = {
      keyword: 'ewaste',
      location: '23.3439232%2C85.311488',
      radius: 1500,
      type: 'e_waste',
      key: apiKey,
    };
  
    return axios
      .get(apiUrl, { params: queryParams })
      .then((response) => {
        // Handle the response data here
        return response.data;
      })
      .catch((error) => {
        // Handle errors here
        throw error;
      });
  }
  
  // Define the /api/getNearbyPlaces endpoint
  router.get('/getNearbyPlaces', async (req, res) => {
    try {
      const response = await getNearbyPlaces();
      res.json(response);
    } catch (error) {
      console.error('Error fetching nearby places:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  module.exports = router;  

  // app.get("/api/anything", getNearbyPlaces);

// At this point, responseData will contain the API response data if the request was successful.

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})