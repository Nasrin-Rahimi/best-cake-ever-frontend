import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentCustomer } from './actions/currentCustomer';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';

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
        <MainContainer />

      </div>
    );
  }
}

export default connect(null, { getCurrentCustomer })(App);
