import fetchApi from '../utils/fetchApi.js';
import db from '../db.js';

const getRoadMap = function () {
    const data = db['road-map'];
    return data;
};

export { getRoadMap };
