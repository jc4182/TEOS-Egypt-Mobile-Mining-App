import axios from 'axios';

const AI_TRADING_API_URL = 'https://api.teos-egypt.com/ai-trading';

export const getTradingRecommendations = async (userId) => {
  try {
    const response = await axios.get(`${AI_TRADING_API_URL}/recommendations/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching trading recommendations:', error);
    throw error;
  }
};

export const executeTrade = async (userId, tradeData) => {
  try {
    const response = await axios.post(`${AI_TRADING_API_URL}/execute`, { userId, tradeData });
    return response.data;
  } catch (error) {
    console.error('Error executing trade:', error);
    throw error;
  }
};
