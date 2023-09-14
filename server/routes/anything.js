// // const router = require("express").Router();  
// const mongoose = require("mongoose");
// const axios = require("axios");

// const Place = require("../models/Anything");

// const apiUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
// const apiKey = process.env.GOOGLE_API_KEY;


// function getNearbyPlaces() {
//     const queryParams = {
//       keyword: 'cruise',
//       location: '-33.8670522,151.1957362',
//       radius: 1500,
//       type: 'restaurant',
//       key: apiKey,
//     };
  
//     return axios
//       .get(apiUrl, { params: queryParams })
//       .then((response) => {
//         // Handle the response data here
//         return response.data;
//       })
//       .catch((error) => {
//         // Handle errors here
//         throw new error;
//       });
//   }
  
//   module.exports = {
//     getNearbyPlaces,
//   };



// // https://maps.googleapis.com/maps/api/place/nearbysearch/json
// //   ?keyword=cruise
// //   &location=-33.8670522%2C151.1957362
// //   &radius=1500
// //   &type=restaurant
// //   &key=YOUR_API_KEY