import React from 'react';
import { useNavigate } from 'react-router-dom';

const NearMe = () => {
  const navigate = useNavigate();

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch('https://your-backend-api.com/api/location', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ latitude, longitude }),
          });

          if (!response.ok) {
            throw new Error(`Server error: ${response.statusText}`);
          }

          const data = await response.json();
          console.log('Location sent successfully:', data);

          
        } catch (error) {
          console.error('Error sending location to backend:', error);
          alert('Failed to send location to server.');
        }
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert('User denied the request for Geolocation.');
            break;
          case error.POSITION_UNAVAILABLE:
            alert('Location information is unavailable.');
            break;
          case error.TIMEOUT:
            alert('The request to get user location timed out.');
            break;
          case error.UNKNOWN_ERROR:
          default:
            alert('An unknown error occurred while fetching location.');
            break;
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  return (
    <>
      <button
        type="button"
        className="text-black font-medium mx-2 bg-gray-300 px-2 py-1 rounded-md"
        onClick={getLocation}
      >
        Near me
      </button>
    </>
  );
};

export default NearMe;
