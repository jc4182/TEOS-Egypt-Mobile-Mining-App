import AsyncStorage from '@react-native-async-storage/async-storage';

export const setNotificationPreferences = async (preferences) => {
  try {
    await AsyncStorage.setItem('notificationPreferences', JSON.stringify(preferences));
  } catch (error) {
    console.error('Error saving notification preferences:', error);
  }
};

export const getNotificationPreferences = async () => {
  try {
    const preferences = await AsyncStorage.getItem('notificationPreferences');
    return preferences ? JSON.parse(preferences) : {};
  } catch (error) {
    console.error('Error retrieving notification preferences:', error);
    return {};
  }
};
