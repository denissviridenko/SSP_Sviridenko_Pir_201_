// store.js
import { createStore, combineReducers } from 'redux';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
  comments: commentsReducer
});

const store = createStore(rootReducer);

export default store;
