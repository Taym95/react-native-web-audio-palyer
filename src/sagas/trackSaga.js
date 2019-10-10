
import { put, take } from 'redux-saga/effects';
import { requestTrackList, trackListLoaded } from '../actions';
import { getTrackList } from '../api';

export function* trackSaga() {

    while (true) {
        yield take(requestTrackList);
        const trackList = yield getTrackList();
        yield put(trackListLoaded(trackList));
    }
}