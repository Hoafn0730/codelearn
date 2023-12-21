import db from '../db.js';

const getCourse = function () {
    const data = db.home;
    return data;
};

export { getCourse };
