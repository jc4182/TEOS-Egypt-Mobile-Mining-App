import axios from 'axios';

const API_URL = 'https://api.teos-egypt.com/recommendations';

export const getRecommendations = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    throw error;
  }
};
