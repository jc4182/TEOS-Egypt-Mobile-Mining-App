import axios from 'axios';

const DAO_API_URL = 'https://api.teos-egypt.com/dao';

export const proposeChange = async (proposal) => {
  try {
    const response = await axios.post(`${DAO_API_URL}/propose`, proposal);
    return response.data;
  } catch (error) {
    console.error('Error proposing change:', error);
    throw error;
  }
};

export const voteOnProposal = async (proposalId, vote) => {
  try {
    const response = await axios.post(`${DAO_API_URL}/vote`, { proposalId, vote });
    return response.data;
  } catch (error) {
    console.error('Error voting on proposal:', error);
    throw error;
  }
};

export const getProposals = async () => {
  try {
    const response = await axios.get(`${DAO_API_URL}/proposals`);
    return response.data;
  } catch (error) {
    console.error('Error fetching proposals:', error);
    throw error;
  }
};
