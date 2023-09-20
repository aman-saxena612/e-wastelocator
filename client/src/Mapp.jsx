import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
// import { getNearbyPlaces } from '../../server/routes/anything';
import axios from "axios";

const Mapp = () => {
  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });
  const [placesData, setPlacesData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const { data } = await axios.get("http://localhost:8001/api/getPlaces");
      // console.log(data);
      setPlacesData(data);
      console.log(placesData);
      // console.log(placesData.data);

    } catch (error) {
      console.log(error);
    }
  }

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

  const handleMarkerClick = (e) => {
    // const latLng = e.latLng;
    // console.log(latLng);
  };

  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_API_KEY}>
      <GoogleMap
        center={userLocation}
        zoom={12}
        mapContainerStyle={{ width: '500px', height: '500px' }}
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

        {/* {placesData.map((place, index) => (
          <MarkerF
            key={index} // Ensure each marker has a unique key
            position={{ lat: place.results[0].geometry.location.lat, lng: place.results[0].geometry.location.lat }}
            onClick={handleMarkerClick}
          />
        ))} */}
        <MarkerF onClick={handleMarkerClick} position={userLocation} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Mapp;
