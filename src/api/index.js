import myAxios from './api';

export const getTrackList = async () => {
    const response = await myAxios.get(`album/302127/tracks/`);
    return response.data.data;
};

export const getTrack = async (trackId) => {
    const response = await myAxios.get(`track/${trackId}`);
    return response.data;
};
