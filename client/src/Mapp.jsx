import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, MarkerF, InfoWindow } from '@react-google-maps/api';
import axios from "axios";

const Mapp = () => {
  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });
  const [placesData, setPlacesData] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const [loading, setLoading] = useState(true);

  // Make the HTTP request to your server when the component mounts
 
  useEffect(() => {
   

    fetchData();
  }, []);

  async function fetchData() {
    try {
      const {data} = await axios.get("http://localhost:8001/api/getPlaces"); // Replace with your actual API endpoint
      // const {data} =  response;
      
        // const results=data?.results;
        // console.log(data.data.results[0].geometry.location.lat);
      
      // Assuming your server returns the data as response.data.data
      setPlacesData(data.data.results); // Update the state with the received data
      console.log(data.data.results); 
      // console.log(placesData[0].geometry.location.lat)// Update the state with the received data);
      // console.log(placesData);
      setLoading(false); // Set loading to false
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Set loading to false in case of an error
    }
  }
  // data.results[0].geometry.location.lat
  // async function getData() {
  //   try {
  //     const { data } = await axios.get("http://localhost:8001/api/getPlaces");
  //     console.log(data);
  //     // setPlacesData(data);
  //     // console.log(placesData);
  //     // console.log(placesData.data);

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setUserLocation(userLocation);
      });
    }
  }, []);
  // <MarkerF onClick={handleMarkerClick} position={data.results[0].geometry.location} />

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_API_KEY}>
      <GoogleMap
        center={userLocation}
        zoom={12}
        mapContainerStyle={{ width: '50vw', height: '600px' }}
        effect={() => {
          if (navigator.geolocation) {
            navigator.geolocation.watchPosition((position) => {
              const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
              // console.log(userLocation);
              setUserLocation(userLocation);
            });
          }
        }}
      >

        { placesData.map((place, index) => (
          <MarkerF
            key={index} // Ensure each marker has a unique key
            position={{ lat: place.geometry.location.lat, lng: place.geometry.location.lng}}
            icon={{
            url: "./icons8-map-marker.gif",
 // Specify the path to your custom marker icon image
            scaledSize: {
              width: 50,
              height: 50
            }
          }}
            onClick={() => handleMarkerClick(place)}
          />
        )) 
        }

        {selectedMarker && (
    <InfoWindow
      position={{ lat: selectedMarker.geometry.location.lat, lng: selectedMarker.geometry.location.lng }}
      onCloseClick={() => setSelectedMarker(null)} // Close the InfoWindow
    >
      {/* InfoWindow content */}
      <div className="info-window">
        <h2>{selectedMarker.vicinity}</h2>
        <button> Book Appointment </button>
        {/* <p>{selectedMarker.description}</p> */}
      </div>
    </InfoWindow>
  )}

  {/* icon={{
            url: "./icons8-user-location-64.png",
 // Specify the path to your custom marker icon image
            scaledSize: {
              width: 50,
              height: 50
            }
          }} */}

        <MarkerF position={userLocation} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Mapp;

// data.results[0].geometry.location.lng
