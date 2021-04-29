import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import customerReducer from './reducers/customers';
import currentCustomer from './reducers/currentCustomer';
import loginForm from './reducers/loginForm';
import myOrders from './reducers/myOrders';
import signupForm from './reducers/signupForm';
import categories from './reducers/categories';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    customers: customerReducer,
    currentCustomer, //OR currentCustomer: currentCustomer
    loginForm,
    myOrders,
    signupForm,
    categories
  })
  
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))
export default store;