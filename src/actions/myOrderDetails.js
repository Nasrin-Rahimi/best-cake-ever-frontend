export const setMyOrderDetails = orderDetails => {
    return {
        type: "SET_MY_ORDER_DETAILS",
        orderDetails
    }
}

export const clearMyOrderDetails = () => {
    return {
        type: "CLEAR_MY_ORDER_DETAILS"        
    }
}