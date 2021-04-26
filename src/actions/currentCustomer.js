//synchronous action creators
export const setCurrentCustomer = customer => {
    return {
        type: 'SET_CURRENT_CUSTOMER',
        customer
    }
}

//asynchronous action creators
export const login = credentials => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(resp => resp.json())
        .then(customer => {
            if (customer.error) {
                alert(customer.error)
            } else {
                dispatch(setCurrentCustomer(customer))
                //redux set customer object with the obove setCurrentCustomer method then flush throuth
                //currentCustomer reducer and catch on SET_CURRENT_CUSTOMER case and return
                //the customer object 
            }
        })
        .catch(console.log)
    }
}

//asynchronous action creators
export const getCurrentCustomer = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/get_current_customer", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(customer => {
            if (customer.error) {
                alert(customer.error)
            } else {
                dispatch(setCurrentCustomer(customer))
            }
        })
        .catch(console.log)
    }
}