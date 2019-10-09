import { PLAY_TRACK } from '../actions';
import produce from "immer";

const initialState = { track: null };

export function currentPlayedtrack(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case PLAY_TRACK:
      const newState = produce(state, draftState => {
        draftState.track = payload
      });
      return newState;
    default:
      return state;
  }
}