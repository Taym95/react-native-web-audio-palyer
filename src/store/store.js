
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { trackReducer } from '../reducers';
import mySagas from '../sagas';

const combinedReducers = combineReducers({ trackReducer });
const sagaMiddleware = createSagaMiddleware();

const store = createStore(combinedReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySagas);

export { store };