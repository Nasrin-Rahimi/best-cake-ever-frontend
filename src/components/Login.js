import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm';
import { login } from '../actions/currentCustomer';

const Login = ({ loginFormData, updateLoginForm, login, history }) => {

    const handleInputChange = event => {
        const { name, value } = event.target //get dynamically name and value
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
         login(loginFormData,history)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={loginFormData.name} type="text" name="name"
             placeholder="Enter your name ..." onChange={handleInputChange} class="input-text" /><br />
            <input value={loginFormData.password} type="text" name="password"
             placeholder="Enter your password ..." onChange={handleInputChange} class="input-text" /><br />
            <input type="submit" value="Log In" class="submit" />
        </form>
    )

}

//gives us access to these chunk of state from the store as props 
const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

//connect is a function that takes up to 4 arguments we usually deal with first 2. 
//It returns a function that takes a component and then returns a component
export default connect(mapStateToProps, { updateLoginForm, login })(Login)

//for using login here we need to pass it as mapDispatchToProps
//login is an action creator, so redux knows what to do with it