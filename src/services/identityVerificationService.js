import axios from 'axios';

const IDENTITY_VERIFICATION_API_URL = 'https://api.teos-egypt.com/identity-verification';

export const verifyIdentity = async (userId, identityData) => {
  try {
    const response = await axios.post(`${IDENTITY_VERIFICATION_API_URL}/verify`, { userId, identityData });
    return response.data;
  } catch (error) {
    console.error('Error verifying identity:', error);
    throw error;
  }
};

export const getIdentityStatus = async (userId) => {
  try {
    const response = await axios.get(`${IDENTITY_VERIFICATION_API_URL}/status/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching identity status:', error);
    throw error;
  }
};
