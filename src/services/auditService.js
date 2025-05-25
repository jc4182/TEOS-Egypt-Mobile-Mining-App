import axios from 'axios';

const AUDIT_API_URL = 'https://api.teos-egypt.com/audit';

export const auditSmartContract = async (contractAddress) => {
  try {
    const response = await axios.post(`${AUDIT_API_URL}/audit`, { address: contractAddress });
    return response.data;
  } catch (error) {
    console.error('Error auditing smart contract:', error);
    throw error;
  }
};
