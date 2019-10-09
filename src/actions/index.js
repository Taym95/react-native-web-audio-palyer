
export const REQUEST_TRACK_LIST = 'myApp/REQUEST_TRACK_LIST';
export const TRACKS_LIST_LOADED = 'myApp/TRACKS_LIST_LOADED';

export const PLAY_TRACK = 'myApp/PLAY_TRACK';

export const playTrack = (track) => ({ type: PLAY_TRACK, payload: track }); 

export const requestTrackList = () => ({ type: REQUEST_TRACK_LIST });
export const trackListLoaded = (tracks) => ({ type: TRACKS_LIST_LOADED, payload: tracks }); 