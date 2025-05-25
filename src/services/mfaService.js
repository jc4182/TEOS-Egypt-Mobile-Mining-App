import axios from 'axios';

const MFA_API_URL = 'https://api.teos-egypt.com/mfa';

export const sendMFACode = async (userId) => {
  try {
    const response = await axios.post(`${MFA_API_URL}/send`, { userId });
    return response.data;
  } catch (error) {
    console.error('Error sending MFA code:', error);
    throw error;
  }
};

export const verifyMFACode = async (userId, code) => {
  try {
    const response = await axios.post(`${MFA_API_URL}/verify`, { userId, code });
    return response.data;
  } catch (error) {
    console.error('Error verifying MFA code:', error);
    throw error;
  }
};
