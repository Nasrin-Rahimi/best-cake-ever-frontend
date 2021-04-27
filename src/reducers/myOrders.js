export default (state = [], action) => {
    switch (action.type) {
        case "SET_MY_ORDERS":
            return action.orders
        default: 
            return state
    }
}