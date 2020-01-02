import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import CoinView from './screens/CoinView';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}/>
      <CoinView/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    backgroundColor: '#C2185B',
    height: Constants.statusBarHeight
  },
});
