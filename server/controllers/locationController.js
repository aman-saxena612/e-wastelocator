// // // https://maps.googleapis.com/maps/api/place/nearbysearch/json
// // //   ?keyword=cruise
// // //   &location=-33.8670522%2C151.1957362
// // //   &radius=1500
// // //   &type=restaurant
// // //   &key=YOUR_API_KEY

// const axios = require("axios");
import axios from "axios";

const apiUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
const apiKey = process.env.GOOGLE_API_KEY;

// Define a controller function to handle the request
async function getNearbyPlaces(req, res) {
  try {
    const queryParams = {
      keyword: 'ewaste',
      location: '23.3439232,85.311488',
      radius: 1500,
      type: 'e_waste',
      key: process.env.GOOGLE_API_KEY,
    };

    const response = await axios.get(apiUrl, { params: queryParams });
    // const response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=ewaste&location=23.3439232%2C85.311488&radius=2500&type=e_waste&key=AIzaSyB5MXrj3ZVs7D8j76KUhL4fxgkrl4eIcR0`);
    const data = response.data;

    // You can customize the response format as needed
    res.status(200).json({ success: true, data });
  } catch (error) {
    // Handle errors and send an error response
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}

// Export the controller function
export default getNearbyPlaces;
// module.exports = {
//   getNearbyPlaces,
// };
