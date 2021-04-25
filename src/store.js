import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import customerReducer from './reducers/customers';
import currentCustomer from './reducers/currentCustomer';
import loginForm from './reducers/loginForm';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    customers: customerReducer,
    currentCustomer, //OR currentCustomer: currentCustomer
    loginForm 
  })
  
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))
export default store;