import React, { Component } from 'react';
import Form from './Form'
//import Result from './Result'
import $ from 'jquery'
import Marketcap from './Marketcap'

//const API_KEY = 'Your Api Key'


class  Cryptos extends React.Component {
  
   state = { 
      coins: [],
      coin: []
    }

    componentDidMount() {
       $('#resPrice').hide()
    }

   getCoins = async (e) => {
      e.preventDefault()
      const api_call = await fetch (`https://min-api.cryptocompare.com/data/top/volumes?tsym=USD&limit=20&?${API_KEY}`)
      const data = await api_call.json()
      this.setState({ coins: data.Data })
      console.log('coins', data.Data)
   }

     getCoin = async (e) => {
      e.preventDefault()
      const coinName = e.target.elements.coinName.value
      const api_call = await fetch (`https://min-api.cryptocompare.com/data/price?fsym=${coinName}&tsyms=USD&?${API_KEY}`)
      const data = await api_call.json()
      this.setState({ coin: data })
       $('#resPrice').show()
      
      console.log('singleCoin', this.state.coin)
      
   }
   render() { 
      
      return ( 
         <div>
            <Form  getCoin={this.getCoin} coinValue={this.state.coin.USD}/>
         
            <div className='container'>
               <button className='btn btn-primary' type='button' onClick={this.getCoins}>Most Traded Coins in past 24 Hours</button>
         {this.state.coins.map((coin) => {
            return (
               <div key={coin.FULLNAME}>
                  <ul className='list-group'>
               <li className='list-group-item'>
                  {coin.FULLNAME} Volume: {coin.VOLUME24HOURTO}
                  </li> 
               </ul>
              
               </div>
              
            )
         })}

         </div>
         </div>
       );
   }
}
 
export default Cryptos;
