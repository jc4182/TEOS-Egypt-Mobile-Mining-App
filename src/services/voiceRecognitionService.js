import Voice from '@react-native-voice/voice';

export const startListening = (onSpeechResults) => {
  Voice.onSpeechResults = onSpeechResults;
  Voice.start('en-US');
};

export const stopListening = () => {
  Voice.stop();
};

export const destroy = () => {
  Voice.destroy().then(Voice.removeAllListeners);
};
