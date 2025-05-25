import axios from 'axios';

const RISK_MANAGEMENT_API_URL = 'https://api.teos-egypt.com/risk-management';

export const getRiskScore = async (userId) => {
  try {
    const response = await axios.get(`${RISK_MANAGEMENT_API_URL}/score/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching risk score:', error);
    throw error;
  }
};

export const updateRiskProfile = async (userId, riskData) => {
  try {
    const response = await axios.post(`${RISK_MANAGEMENT_API_URL}/update`, { userId, riskData });
    return response.data;
  } catch (error) {
    console.error('Error updating risk profile:', error);
    throw error;
  }
};
