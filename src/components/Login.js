import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm';

const Login = ({loginForm, updateLoginForm}) => {

    const handleInputChange = event => {
        const { name, value } = event.target //get dynamically name and value
        const updatedFormInfo = {
            ...loginForm,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    return (
        <form onSubmit="">
            <input value={loginForm.name} type="text" name="name"
             placeholder="Name" onChange={handleInputChange} />
            <input value={loginForm.password} type="text" name="password"
             placeholder="Password" onChange={handleInputChange} />
            <input type="button" value="Log In" />
        </form>
    )

}

//gives us access to these chunk of state from the store as props 
const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    }
}

//connect is a function that takes up to 4 arguments we usually deal with first 2. 
//It returns a function that takes a component and then returns a component
export default connect(mapStateToProps, { updateLoginForm })(Login)