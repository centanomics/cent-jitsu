const log = require('debug')('web:server')
const cors = require('cors')
const express = require('express');
const path = require("path");
const http = require('http');
const socketIo = require('socket.io');

const randomDeck = require('./utils/randomDeck')

//define ports
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const index = require('./routes/index');
app.use(index);

const server = http.createServer(app);
const io = socketIo(server);

//game variables
let game = [];
let players = [];

io.on("connection", (socket) => {
  log(socket.id, "connected")

  socket.on('disconnect', () => {
    log(socket.id, "disconnected")
  })
})

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set Static Folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

server.listen(PORT, () => log(`I'm listening on port ${PORT}`))

