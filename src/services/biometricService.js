import ReactNativeBiometrics from 'react-native-biometrics';

export const authenticateUser  = async () => {
  const rnBiometrics = new ReactNativeBiometrics();

  const { available, biometryType } = await rnBiometrics.isSensorAvailable();

  if (available) {
    const result = await rnBiometrics.simplePrompt({
      promptMessage: 'Confirm your identity',
    });

    if (result.success) {
      console.log('Authenticated successfully');
      return true;
    } else {
      console.log('Authentication failed');
      return false;
    }
  } else {
    console.log('Biometric sensor not available');
    return false;
  }
};
