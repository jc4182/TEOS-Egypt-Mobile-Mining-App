import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AppNavigator from './navigation/AppNavigator';
import { ThemeProvider } from './context/ThemeContext';
import './i18n'; // Importing i18n for multi-language support
import { requestUserPermission, listenForNotifications } from './services/notificationService';
import { authenticateUser } from './services/biometricService';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    listenForNotifications();
    authenticateUser(); // Biometric authentication on app launch
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
