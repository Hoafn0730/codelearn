import fetchApi from '../utils/fetchApi.js';

const getRoadMap = async function () {
    const data = await fetchApi.get('/road-map');
    return data;
};

export { getRoadMap };
