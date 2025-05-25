import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ChatBot } from 'react-native-chatbot'; // Hypothetical chatbot library

const steps = [
  {
    id: '1',
    message: 'Welcome to TEOS! How can I assist you today?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 'mining', label: 'Mining', trigger: '3' },
      { value: 'profile', label: 'Profile', trigger: '4' },
    ],
  },
  {
    id: '3',
    message: 'You can mine $TEOS by clicking the button on the home screen.',
    end: true,
  },
  {
    id: '4',
    message: 'You can view your profile by navigating to the Profile screen.',
    end: true,
  },
];

const Chatbot = () => {
  return (
    <View style={styles.container}>
      <ChatBot steps={steps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Chatbot;
