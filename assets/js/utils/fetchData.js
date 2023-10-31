const FetchData = (function () {
    return {
        get: async function (path, option = {}) {
            try {
                const response = await fetch(`${API}/api-user/${path}`, option);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return await response.json();
            } catch (error) {
                console.error('Error fetching user data:', error);
                return null;
            }
        },
    };
})();

export default FetchData;
