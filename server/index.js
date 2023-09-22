import express from "express";
import mongoose from "mongoose";
import cloudinary from "cloudinary";
// import mongoose from "mongoose";
import {config} from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";

import userRoute from "./routes/user.js";
import {connectDB} from "./db/conn.js";
import router from "./routes/getLocations.js";
import getNearbyPlaces from "./controllers/locationController.js";
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
app.use("/api/getPlaces", getNearbyPlaces);

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
  // function getNearbyPlaces() {
  //   const apiUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
  //   const apiKey = process.env.GOOGLE_API_KEY;
    
  //   const queryParams = {
  //     keyword: 'ewaste',
  //     location: '23.3439232%2C85.311488',
  //     radius: 1500,
  //     type: 'e_waste',
  //     key: apiKey,
  //   };
  
  //   return axios
  //     .get(apiUrl, { params: queryParams })
  //     .then((response) => {
  //       // Handle the response data here
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       // Handle errors here
  //       throw error;
  //     });
  // }
  
  // Define the /api/getNearbyPlaces endpoint
  // router.get('/getNearbyPlaces', async (req, res) => {
  //   try {
  //     const response = await getNearbyPlaces();
  //     res.json(response);
  //   } catch (error) {
  //     console.error('Error fetching nearby places:', error);
  //     res.status(500).json({ error: 'Internal server error' });
  //   }
  // });
  
  // module.exports = router;  

  // app.get("/api/anything", getNearbyPlaces);

// At this point, responseData will contain the API response data if the request was successful.

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})