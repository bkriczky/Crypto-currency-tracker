import React from 'react';
//import Result from './Result'

const Form = props => {
   return ( 
    <div className='container'>
        <div className='jumbotron'>
   <form onSubmit={props.getCoin} className='coinPriceForm'>
        <h1>Crypto Currency Tracker</h1>
        <div className='input-group'>
        <input className='searchInput'type='text' name='coinName' placeholder='Enter crypto symbol..'/>
         <div className='input-group-append'>
         <button type='secondary' className='btn btn-success'>Search</button>
         </div>
         </div>
         <div className='alert alert-success' role='alert' id='resPrice' >
        {'$' + props.coinValue}
        </div>
    
     </form> 
     </div>
     </div>
  
    );
}
 
export default Form;


