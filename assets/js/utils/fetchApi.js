const fetchApi = (function () {
    let API = 'http://localhost:3000';
    return {
        use: function (path) {
            API = path;
        },
        get: async function (path, option = {}) {
            return new Promise(async (resolve, reject) => {
                try {
                    const res = await fetch(`${API}${path}`, option);
                    resolve(res.json());
                } catch (error) {
                    console.error('Error fetching user data:', error);
                    reject(error);
                }
            });
        },
        post: async function (path, data = {}) {
            try {
                return await fetch(`${API}/api-user/${path}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }).then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
                return null;
            }
        },
        patch: async function (path, data = {}) {
            try {
                return await fetch(`${API}/api-user/${path}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }).then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
                return null;
            }
        },
        delete: async function (path, data = {}) {
            try {
                return await fetch(`${API}/api-user/${path}?id=${data.id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
                return null;
            }
        },
    };
})();

export default fetchApi;
