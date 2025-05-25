import axios from 'axios';

const BIOMETRIC_AUTHENTICATION_API_URL = 'https://api.teos-egypt.com/biometric-authentication';

export const authenticateUser = async (userId, biometricData) => {
  try {
    const response = await axios.post(`${BIOMETRIC_AUTHENTICATION_API_URL}/authenticate`, { userId, biometricData });
    return response.data;
  } catch (error) {
    console.error('Error authenticating user:', error);
    throw error;
  }
};

export const enrollBiometric = async (userId, biometricData) => {
  try {
    const response = await axios.post(`${BIOMETRIC_AUTHENTICATION_API_URL}/enroll`, { userId, biometricData });
    return response.data;
  } catch (error) {
    console.error('Error enrolling biometric:', error);
    throw error;
  }
};
