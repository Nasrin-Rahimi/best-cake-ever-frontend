export default (state = [], action) => {
    switch (action.type) {
        case "SET_MY_ORDERS":
            return action.orders
        case "CLEAR_MY_ORDERS":
            return []
        default: 
            return state
    }
}