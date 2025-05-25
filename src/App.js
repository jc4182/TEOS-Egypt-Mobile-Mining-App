import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AppNavigator from './navigation/AppNavigator';
import { requestUserPermission, listenForNotifications } from './services/notificationService';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  useEffect(() => {
    requestUserPermission();
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
