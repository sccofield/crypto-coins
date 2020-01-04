import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import CoinView from './screens/CoinView';
import TopBar from './components/TopBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshDate: '-',
    }
  }

  _setRefreshDate = (date) => {
    console.log('Updated: ' + date)
    this.setState({
      refreshDate: date
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.statusBar}/>
        <TopBar 
          title='Show Me The Coin'
          refreshDate={this.state.refreshDate}
        />
        <CoinView 
          style={styles.coinView}
          refreshDate = {this._setRefreshDate}
        />
      </View>
    );
  }
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
    // alignItems: 'center',
    // justifyContent: 'flex-start' // center, space-around
  }
});
