import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';

class CoinItem extends React.Component {
  render(){
    let date = new Date();
    let now = date.toLocaleString();

    return (
      <View style={styles.container}>
        <Image
          style={{width: 50, height: 50}}
          source={{ uri: 'https://bitcoin.org/img/icons/opengraph.png'}}
        />
        <Text style={[styles.text, {flex: 1}]}>
          {this.props.name || 'name'}
        </Text>
        <Text style={[styles.text, {flex: 1}]}>
          {'Volume: ' + (this.props.volumn || 0)}
        </Text>
        <Text style={[styles.text, {flex: 1}]}>
          {'Price: ' + (this.props.price || 0)}
        </Text>
        <Text style={[styles.text, {flex: 1}]}>
          {'#' + (this.props.rank || 'Rank')}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 5
  },
  text: {
    color: 'white'
  }
});

export default CoinItem;
