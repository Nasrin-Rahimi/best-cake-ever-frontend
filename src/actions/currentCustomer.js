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
            body: JSON.stringify({name: "Nasrin", password: "mah"})
        })
    }
}