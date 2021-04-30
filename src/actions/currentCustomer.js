import { resetLoginForm } from './loginForm'
import { resetSignupForm } from './signupForm'
import { setMyOrders, clearMyOrders } from './myOrders'

//synchronous action creators
export const setCurrentCustomer = customer => {
    return {
        type: 'SET_CURRENT_CUSTOMER',
        customer
    }
}

export const clearCurrentCustomer = () => {
    return {
        type: "CLEAR_CURRENT_CUSTOMER"
    }
}

//asynchronous action creators
export const login = (credentials, history) => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(resp => resp.json())
        .then(customer => {
            if (customer.error) {
                // alert(customer.error)
            } else {
                dispatch(setCurrentCustomer(customer.data))
                //redux set customer object with the obove setCurrentCustomer method then flush throuth
                //currentCustomer reducer and catch on SET_CURRENT_CUSTOMER case and return
                //the customer object 
                dispatch(setMyOrders(customer.included.filter(data => data.type === "order")))
                dispatch(resetLoginForm())
                history.push('/')
            }
        })
        .catch(console.log)
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(clearCurrentCustomer())
        dispatch(clearMyOrders())
        return fetch('http://localhost:3001/api/v1/logout', {
            credentials: "include",
            method: "DELETE",
        })
    }
}

export const getCurrentCustomer = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/get_current_customer", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(customer => {
            if (customer.error) {
                // alert(customer.error)
            } else {
                dispatch(setCurrentCustomer(customer.data))
                dispatch(setMyOrders(customer.included.filter(data => data.type === "order")))
            }
        })
        .catch(console.log)
    }
}

export const signup = (credentials, history) => {
    return dispatch => {
        const customer = {
            customer: credentials
        }
        return fetch("http://localhost:3001/api/v1/signup", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
        .then(resp => resp.json())
        .then(customer => {
            if (customer.error) {
                alert(customer.error)
            } else {
                dispatch(setCurrentCustomer(customer.data))
                // dispatch(setMyOrders(customer.included.filter(data => data.type === "order")))
                dispatch(resetSignupForm())
                history.push('/')
            }
        })
        .catch(console.log)
    }
}