import { createStore, combineReducers } from 'redux';
import customerReducer from './reducers/customers';
import currentCustomer from './reducers/currentCustomer';

const reducer = combineReducers({
    customers: customerReducer,
    currentCustomer //OR currentCustomer: currentCustomer
  })
  
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;