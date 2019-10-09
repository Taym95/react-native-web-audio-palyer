import { TRACKS_LIST_LOADED } from '../actions';
import produce from "immer"

const initialState = { tracks: [] };

export function trackReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TRACKS_LIST_LOADED:
      const newState = produce(state, draftState => {
        draftState.tracks = payload
      });
      return newState;
    default:
      return state;
  }
}