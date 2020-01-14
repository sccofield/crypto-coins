import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native';


import CoinItem from '../components/CoinItem';
import { getCoinIconUri } from '../libs/Constants';

class CoinView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      coinDatas: [],
      isLoading: false,
    };
  }

  componentDidMount(){
    this._getCoinDatas(10)
  }

  _getCoinDatas = async (limit) => {
    this.setState({
      isLoading: true
    });

    try {
      const response = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=${limit}`, {
        headers: {
          'X-CMC_PRO_API_KEY': '989d2905-62ce-4d5b-b2b9-b336c38d89cf'
        }
      })
      const responseJson = await response.json();
      const date = new Date();
      const now = date.toLocaleString()

      if (this.props.refreshDate != null){
        this.props.refreshDate(now)
      }
      await this.setState({
        coinDatas: responseJson.data,
        isLoading: false
      })
    } catch(error) {
      console.error('_getCoinDatas', error)
    }
  }

  _renderItem = ({item}) => {
    const { cmc_rank, name, price_usd, quote, last_updated } = item;

    return(
      <TouchableOpacity 
       onPress={() => this.props.navigation && 
        this.props.navigation.push('Youtube', {title: name})}
      >
      <CoinItem
        rank={cmc_rank}
        name={name}
        price={quote.USD.price}
        volumn={quote.USD.market_cap}
        iconUri={getCoinIconUri(name)}
      />
      </TouchableOpacity>
    );
  }

  render(){
    return (
      <FlatList
        data={this.state.coinDatas}
        keyExtractor={(item)=> item.name}
        renderItem={this._renderItem}
        refreshing={this.state.isLoading}
        onRefresh={this._getCoinDatas}
      />
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
