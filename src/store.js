import { createStore, combineReducers } from 'redux';
import customerReducer from './reducers/customers';
import currentCustomer from './reducers/currentCustomer';
import loginForm from './reducers/loginForm'

const reducer = combineReducers({
    customers: customerReducer,
    currentCustomer, //OR currentCustomer: currentCustomer
    loginForm
  })
  
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;