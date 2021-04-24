export default (state = null, action) => {
    switch (action.type) {
        case "SET_CURRENT_CUSTOMER":
            return action.customer
        default: 
            return state
    }
}