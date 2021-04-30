export const setMyOrders = orders => {
    return {
        type: "SET_MY_ORDERS",
        orders
    }
}

export const clearMyOrders = () => {
    return {
        type: "CLEAR_MY_ORDERS"        
    }
}