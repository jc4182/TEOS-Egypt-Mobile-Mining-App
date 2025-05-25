import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const UserDashboard = ({ user, onEdit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Dashboard</Text>
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>TEOS Balance: {user.teosBalance}</Text>
      <Button title="Edit Profile" onPress={onEdit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default UserDashboard;
