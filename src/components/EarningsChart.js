import React from 'react';
import { LineChart, Grid } from 'react-native-svg-charts';
import { View, Text } from 'react-native';

const EarningsChart = ({ earningsData }) => {
  const data = earningsData.map(item => item.amount);

  return (
    <View style={{ height: 200 }}>
      <Text style={{ textAlign: 'center' }}>Earnings Over Time</Text>
      <LineChart
        style={{ flex: 1 }}
        data={data}
        svg={{ stroke: 'rgb(134, 65, 244)' }}
        contentInset={{ top: 20, bottom: 20 }}
      >
        <Grid />
      </LineChart>
    </View>
  );
};

export default EarningsChart;
