import { spawn } from 'redux-saga/effects';
import { todoSaga } from './trackSaga';

export default function* mySagas() {
    yield [
        spawn(todoSaga),
    ]
}