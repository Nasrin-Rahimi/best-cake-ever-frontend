import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/users';

const reducer = combineReducers({
    users: userReducer
  })
  
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;