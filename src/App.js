import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentCustomer } from './actions/currentCustomer';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from "./components/Signup";
import MyOrders from './components/MyOrders';
import Home from './components/Home';
import Categories from './components/Categories';

class App extends React.Component {

  //every time app did mount, we send a request and say is there anyone logged in
  //if yes we grab it
  componentDidMount() {
    this.props.getCurrentCustomer()
  }

  render (){
    return (
      <div className="App">
        <header className="App-header">
          <a href="/">
            <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX25762110.jpg" alt="Best Cake Ever" className="header_img" />
          </a>
          {/* <h1>Best Cake Ever</h1> */}
        </header>
        
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/orders" component={MyOrders} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/categories" component={Categories} />
      </div>
    );
  }
}

export default connect(null, { getCurrentCustomer })(App);
