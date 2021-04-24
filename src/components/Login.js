import React from 'react';
import { connect } from 'react-redux';

const Login = (props) => {
    return (
        <form onSubmit="">
            <input value={props.name} type="text" name="name" placeholder="Name" onChange="" />
            <input value={props.password} type="text" name="password" placeholder="Password" onChange="" />
            <input type="button" value="Log In" />
        </form>
    )

}

//gives us access to these chunk of state from the store as props 
const mapStateToProps = state => {
    return {
        name: state.loginForm.name,
        password: state.loginForm.password
    }
}

//connect is a function that takes up to 4 arguments we usually deal with first 2. 
//It returns a function that takes a component and then returns a component
export default connect(mapStateToProps)(Login)