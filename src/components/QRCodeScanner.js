import React from 'react';
import { View, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';

const QRCodeScanner = ({ onRead }) => {
  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        style={{ flex: 1 }}
        onBarCodeRead={onRead}
        captureAudio={false}
      >
        <Text style={{ color: 'white', fontSize: 20 }}>Scan QR Code</Text>
      </RNCamera>
    </View>
  );
};

export default QRCodeScanner;
