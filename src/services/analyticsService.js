import axios from 'axios';

const ANALYTICS_API_URL = 'https://api.teos-egypt.com/analytics';

export const logUserBehavior = async (userId, action) => {
  try {
    await axios.post(`${ANALYTICS_API_URL}/log`, { userId, action });
  } catch (error) {
    console.error('Error logging user behavior:', error);
  }
};

export const getUserInsights = async (userId) => {
  try {
    const response = await axios.get(`${ANALYTICS_API_URL}/insights/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user insights:', error);
    throw error;
  }
};
