import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const Mapp = () => {
  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });

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

  const handleMarkerClick = (e) => {
    console.log(e);
  }

  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_API_KEY}>
      <GoogleMap
        center={userLocation}
        zoom={12}
        mapContainerStyle={{ width: '100%', height: '500px' }}
        effect={() => {
          if (navigator.geolocation) {
            navigator.geolocation.watchPosition((position) => {
              const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
              console.log(userLocation);
            //   setUserLocation(userLocation);
            });
          }
        }}
      >
        <MarkerF onClick={handleMarkerClick} position={userLocation} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Mapp;
