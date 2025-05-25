import Geolocation from 'react-native-geolocation-service';

export const getCurrentLocation = (callback) => {
  Geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      callback({ latitude, longitude });
    },
    (error) => {
      console.error('Error getting location:', error);
      callback(null);
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
};
