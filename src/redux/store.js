import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';

let middlewares = [thunkMiddleware];

export const store = createStore(
  combineReducers({...reducers}),
  compose(applyMiddleware(...middlewares)),
);
