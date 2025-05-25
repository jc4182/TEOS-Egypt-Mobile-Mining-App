import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import MiningButton from '../components/MiningButton';
import { fetchDailyEarnings } from '../utils/api';

const HomeScreen = ({ userId }) => {
  const [dailyEarnings, setDailyEarnings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEarnings = async () => {
      try {
        const earnings = await fetchDailyEarnings(userId);
        setDailyEarnings(earnings);
      } catch (error) {
        console.error('Failed to fetch earnings:', error);
      } finally {
        setLoading(false);
      }
    };

    getEarnings();
  }, [userId]);

  const handleMining = () => {
    // Implement mining logic here
    console.log('Mining $TEOS...');
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Text style={styles.title}>Welcome to TEOS Mining!</Text>
          <MiningButton onPress={handleMining} dailyEarnings={dailyEarnings} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
