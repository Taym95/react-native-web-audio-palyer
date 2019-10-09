
import { put, take, delay } from 'redux-saga/effects';
import { TRACKS_REQUEST, tracksLoaded } from '../actions';

export function* todoSaga() {
    while (true) {
        yield take(TRACKS_REQUEST);
        yield delay(4000);
        yield put(tracksLoaded([]));
    }
}