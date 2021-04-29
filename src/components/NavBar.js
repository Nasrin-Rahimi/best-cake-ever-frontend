import React from 'react';
import Login from './Login';
import Logout from './Logout';
import { connect } from 'react-redux';
import Signup from './Signup';
import { NavLink } from 'react-router-dom';

const NavBar = ({ currentCustomer }) => {
  return (
    <div className="NavBar">
      { currentCustomer ? <strong>Hello {currentCustomer.attributes.name} </strong> : '' }
        { currentCustomer ?  
          <div>
            <NavLink  to="/logout" exact > Log Out </NavLink> | 
            <NavLink to="/orders" exact > My Orders </NavLink>
          </div> : 
          <div>
            <NavLink  to="/login" exact > Log In </NavLink> |
            <NavLink  to="/signup" exact > Sign Up </NavLink> | 
          </div> 
        }
        <NavLink  to="/categories" exact > Categories </NavLink>  
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
