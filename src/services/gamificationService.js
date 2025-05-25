import axios from 'axios';

const GAMIFICATION_API_URL = 'https://api.teos-egypt.com/gamification';

export const getUserAchievements = async (userId) => {
  try {
    const response = await axios.get(`${GAMIFICATION_API_URL}/achievements/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user achievements:', error);
    throw error;
  }
};

export const unlockAchievement = async (userId, achievementId) => {
  try {
    const response = await axios.post(`${GAMIFICATION_API_URL}/unlock`, { userId, achievementId });
    return response.data;
  } catch (error) {
    console.error('Error unlocking achievement:', error);
    throw error;
  }
};
