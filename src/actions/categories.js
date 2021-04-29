//synchronous action creators
export const setCategories = categories => {
    return {
        type: "SET_CATEGORIES",
        categories
    }
}

//asynchronous action creators
export const getCategories = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/categories", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(category => {
            if (category.error) {
                alert(category.error)
            } else {
                // console.log(category)
                dispatch(setCategories(category.data))
                // dispatch(setMyOrders(customer.included.filter(data => data.type === "order")))
            }
        })
        .catch(console.log)
    }
}