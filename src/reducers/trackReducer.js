import { } from '../actions';

const initialState = { tracks: [] };

export function trackReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {

    default:
      return state;
  }
}