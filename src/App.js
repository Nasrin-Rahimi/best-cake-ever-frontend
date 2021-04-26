import React from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import { connect } from 'react-redux';
import { getCurrentCustomer } from './actions/currentCustomer';

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
        <h1>Welcome to Best Cake Ever</h1>

        { this.props.currentCustomer ? <Logout /> : <Login /> }

      </div>
    );
  }
}

//destructing currentCustomer from state. We can do it because
//the incoming argument is as object (state) comign from redux
//and we know it has a property called currentCustomer
const mapStateToProps = ( {currentCustomer} ) => {
  return {
    currentCustomer
  }
}

export default connect(mapStateToProps, { getCurrentCustomer })(App);

//For adding logout, we need to know about current customer
//so we need to add mapStateToProps to get state of current
//customer
