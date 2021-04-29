import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm';
import { signup } from '../actions/currentCustomer';

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {

    const handleInputChange = event => {
        const { name, value } = event.target //get dynamically name and value
        const updatedFormInfo = {
            ...signupFormData,
            [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
         signup(signupFormData, history)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={signupFormData.name} type="text" name="name"
             placeholder="Enter your name ..." onChange={handleInputChange} class="input-text" /><br />
            <input value={signupFormData.password} type="text" name="password"
             placeholder="Enter your password ..." onChange={handleInputChange} class="input-text" /><br />
            <input type="submit" value="Sign Up" class="submit" />
        </form>
    )

}

//gives us access to these chunk of state from the store as props 
const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}

//connect is a function that takes up to 4 arguments we usually deal with first 2. 
//It returns a function that takes a component and then returns a component
export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)
