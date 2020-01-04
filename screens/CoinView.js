import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import CoinItem from '../components/CoinItem';

class CoinView extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <CoinItem />
        <CoinItem />
        <CoinItem />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center'
  }
})

export default CoinView;
