import axios from 'axios';

const CROSS_CHAIN_API_URL = 'https://api.teos-egypt.com/crosschain';

export const transferAssets = async (fromChain, toChain, amount, address) => {
  try {
    const response = await axios.post(`${CROSS_CHAIN_API_URL}/transfer`, {
      fromChain,
      toChain,
      amount,
      address,
    });
    return response.data;
  } catch (error) {
    console.error('Error transferring assets:', error);
    throw error;
  }
};

export const getCrossChainRates = async () => {
  try {
    const response = await axios.get(`${CROSS_CHAIN_API_URL}/rates`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cross-chain rates:', error);
    throw error;
  }
};
