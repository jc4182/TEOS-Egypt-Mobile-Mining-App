import analytics from '@react-native-firebase/analytics';

export const logEvent = async (eventName, params) => {
  await analytics().logEvent(eventName, params);
};

export const setUserProperties = async (userId) => {
  await analytics().setUserId(userId);
};
