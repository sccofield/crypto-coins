import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import CoinView from './screens/CoinView';
import TopBar from './components/TopBar';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}/>
      <TopBar title='Show Me The Coin'/>
      <CoinView style={styles.coinView}/>
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
  coinView: {
    width: '100%',
    flex: 1,
    flexDirection: 'column', // row
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start' // center, space-around
  }
});
