import fetchApi from '../utils/fetchApi.js';
import storage from '../utils/storage.js';

const login = async (data) => {
    return await fetchApi.get(`/users?userName=${data.userName}&userName=${data.password}`);
};

const logout = () => {
    storage.remove('account');
};

export { login, logout };
