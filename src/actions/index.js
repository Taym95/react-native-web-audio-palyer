
export const TRACKS_REQUEST = 'myApp/TRACKS_REQUEST';
export const TRACKS_LOADED = 'myApp/INCREMENT';

export const tracksRequest = () => ({ type: TRACKS_REQUEST });
export const tracksLoaded = ({ tracks }) => ({ type: TRACKS_LOADED, payload: tracks });