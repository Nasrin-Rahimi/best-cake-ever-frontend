export default (state = null, action) => {
    switch (action.type) {
        case "SET_CURRENT_CUSTOMER":
            return action.customer
        case "CLEAR_CURRENT_CUSTOMER":
            return null
        default: 
            return state
    }
}