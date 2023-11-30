const connection = new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:44390/signalr', {
        withCredentials: true,
    })
    .build();

connection.on('connected', (connectionId) => {
    console.log(`Connected with ConnectionId: ${connectionId}`);
});

connection
    .start()
    .then(() => {
        console.log('Connection started');
    })
    .catch((err) => {
        console.error(`Error: ${err}`);
    });

export default connection;
