import Share from 'react-native-share';

export const shareAchievement = async (message) => {
  try {
    await Share.open({
      message: message,
    });
  } catch (error) {
    console.error('Error sharing achievement:', error);
  }
};
