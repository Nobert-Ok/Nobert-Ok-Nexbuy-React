import React, { Component } from 'react';
import './App.css';
import Home from "./containers/Home"
import Product from "./containers/Product"
import Cart from "./containers/Cart"
import Store from "./containers/Store"
import Store2 from "./containers/Store2"
import Profile from "./containers/Profile"
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component{
  render(){
    return (
      <div className="App">
        {/* <Home/> */}
        {/* <Cart></Cart> */}
        {/* <Product></Product> */}
        {/* <Store></Store> */}
        {/* <Store2></Store2> */}
        <Profile></Profile>
      </div>
    );
  }
}

export default App;
