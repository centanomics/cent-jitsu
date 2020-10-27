// debug not working
const log = require('debug')('server:log');
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

//define ports
const PORT = process.env.PORT || 5000;

const app = express();

const index = require('./routes/index');
app.use(index);

const server = http.createServer(app);
const io = socketIo(server);

//game variables
let interval;

io.on("connection", (socket) => {
  console.log(socket.id, " connected")

})

setInterval(() => {

}, 1);

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set Static Folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

server.listen(PORT, () => console.log(`I'm listening on port ${PORT}`))

