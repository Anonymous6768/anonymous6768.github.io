const io = require('socket.io')(server, {
    cors: {
        origin: "https://chokitu.github.io",
        methods: ["GET", "POST"]
    }
});

app.set('port', process.env.PORT || 3000);
server.listen(port); 
