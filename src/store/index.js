import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import user from './user';
import task from './task';
import report from './report';

const reducer = combineReducers({
  user,
  report,
  task,
});
const store = configureStore({
  reducer,
});
export default store;
