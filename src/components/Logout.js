import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentCustomer';

const Logout = ({ logout }) => {

    return (
        <form onSubmit={ logout }>
            <input type="submit" value="Log Out" />
        </form>
    )

}

export default connect(null, { logout })(Logout)

//for logout addition to this component we need:

//1- action (creator)

//2- another case statement in my currentCustomer reducer