import { createStore, combineReducers } from 'redux';
import customerReducer from './reducers/customers';

const reducer = combineReducers({
    customers: customerReducer
  })
  
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;