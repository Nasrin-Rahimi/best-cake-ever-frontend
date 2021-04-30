export default (state = [], action) => {
    switch (action.type) {
        case "SET_MY_ORDER_DETAILS":
            return action.orderDetails
        case "CLEAR_MY_ORDER_DETAILS":
            return []
        default: 
            return state
    }
}