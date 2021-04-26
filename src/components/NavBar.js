import React from 'react';
import Login from './Login';
import Logout from './Logout';
import { connect } from 'react-redux';

const NavBar = ({ currentCustomer }) => {
    return (
        <div className="nav">
            { currentCustomer ? <strong>Welcome {currentCustomer.name} </strong> : '' }
            { currentCustomer ? <Logout /> : <Login /> }
        </div>
    )
}
//destructing currentCustomer from state. We can do it because
//the incoming argument is as object (state) comign from redux
//and we know it has a property called currentCustomer
const mapStateToProps = ( {currentCustomer} ) => {
  return {
    currentCustomer
  }
}

export default connect(mapStateToProps)(NavBar);

//For adding logout, we need to know about current customer
//so we need to add mapStateToProps to get state of current
//customer
