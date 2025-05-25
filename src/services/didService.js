import { createDID, verifyDID } from 'did-library'; // Hypothetical library

export const generateDID = async (userData) => {
  try {
    const did = await createDID(userData);
    return did;
  } catch (error) {
    console.error('Error generating DID:', error);
    throw error;
  }
};

export const validateDID = async (did) => {
  try {
    const isValid = await verifyDID(did);
    return isValid;
  } catch (error) {
    console.error('Error validating DID:', error);
    throw error;
  }
};
