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
let players = [];

// shows the user connected
io.on("connection", (socket) => {
  log(socket.id, "connected")

  // subscribes the client to a timer that updates data
  socket.on('subscribeToTimer', (interval) => {
    setInterval(() => {
      socket.emit('timer', players);
    }, interval);
  });

  // adds player to the player variable
  socket.on('playerAdd', data => {
    if (players.filter(player => player.gameId === data.gameId).length + 1 > 2) {
      socket.emit('fullGame');
    } else {
      players.push({
        id: socket.id,
        gameId: data.gameId,
        deck: randomDeck()
      });
    }
    
  })

  // shows the user disconnected
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

