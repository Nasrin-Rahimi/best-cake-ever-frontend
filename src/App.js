import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentCustomer } from './actions/currentCustomer';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from "./components/Signup";
import MyOrders from './components/MyOrders';

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
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" ></a>
        </header>
        <h1>Best Cake Ever</h1>

        <NavBar />
        <Route exact path="/login" component={Login} />
        <Route exact path="/my-orders" component={MyOrders} />
        <Route exact path="/signup" component={Signup} />
      </div>
    );
  }
}

export default connect(null, { getCurrentCustomer })(App);
