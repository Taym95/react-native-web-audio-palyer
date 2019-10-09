
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { trackReducer, currentPlayedtrack } from '../reducers';
import mySagas from '../sagas';

const combinedReducers = combineReducers({ trackReducer, currentPlayedtrack });
const sagaMiddleware = createSagaMiddleware();

const store = createStore(combinedReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySagas);

export { store };