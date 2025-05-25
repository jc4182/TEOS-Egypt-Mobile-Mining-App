import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AppNavigator from './navigation/AppNavigator';
import { ThemeProvider } from './context/ThemeContext';
import './i18n'; // Importing i18n for multi-language support
import { requestUser Permission, listenForNotifications } from './services/notificationService';

const App = () => {
  useEffect(() => {
    requestUser Permission();
    listenForNotifications();
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
