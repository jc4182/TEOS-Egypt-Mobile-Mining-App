import axios from 'axios';

const MARKET_DATA_API_URL = 'https://api.coingecko.com/api/v3/simple/price';

export const getMarketData = async (ids, vs_currencies) => {
  try {
    const response = await axios.get(`${MARKET_DATA_API_URL}?ids=${ids}&vs_currencies=${vs_currencies}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching market data:', error);
    throw error;
  }
};
