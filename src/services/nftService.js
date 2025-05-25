import axios from 'axios';

const API_URL = 'https://api.teos-egypt.com/nfts';

export const fetchNFTs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching NFTs:', error);
    throw error;
  }
};

export const createNFT = async (nftData) => {
  try {
    const response = await axios.post(API_URL, nftData);
    return response.data;
  } catch (error) {
    console.error('Error creating NFT:', error);
    throw error;
  }
};
