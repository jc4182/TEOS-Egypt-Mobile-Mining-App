import axios from 'axios';

const QUANTUM_COMPUTING_API_URL = 'https://api.teos-egypt.com/quantum-computing';

export const runQuantumSimulation = async (simulationData) => {
  try {
    const response = await axios.post(`${QUANTUM_COMPUTING_API_URL}/simulate`, simulationData);
    return response.data;
  } catch (error) {
    console.error('Error running quantum simulation:', error);
    throw error;
  }
};

export const getQuantumResults = async (simulationId) => {
  try {
    const response = await axios.get(`${QUANTUM_COMPUTING_API_URL}/results/${simulationId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching quantum results:', error);
    throw error;
  }
};
