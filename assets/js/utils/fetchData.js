const fetchData = async (url, callback, data) => {
    await fetch(
        `${API}/api-user/${url}`,
        data
            ? {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data),
              }
            : undefined,
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(callback)
        .catch((error) => console.error('Error fetching user data:', error));
};

export default fetchData;
