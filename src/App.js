import React from 'react';
import './App.css';
import Login from './components/Login';
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
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            
          </a>
        </header>
        <h1>Welcome to Best Cake Ever</h1>
        <Login />
      </div>
    );
  }
}

export default connect(null, { getCurrentCustomer })(App);
