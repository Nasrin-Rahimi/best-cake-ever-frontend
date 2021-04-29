//synchronous action creators
export const setCategories = categories => {
    return {
        type: "SET_CATEGORIES",
        categories
    }
}

//asynchronous action creators
export default Categories
export const getCategories = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/", {
            credentials: "include",
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
                dispatch(setCurrentCustomer(customer.data))
                dispatch(setMyOrders(customer.included.filter(data => data.type === "order")))
            }
        })
        .catch(console.log)
    }
}