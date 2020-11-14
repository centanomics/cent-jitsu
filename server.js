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
  log(socket.id, " connected")

  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });

  // add game room to games (if not there already) and join room
  // socket.on("gameCreate", data => {
  //   if (game.findIndex((gameId) => gameId === data.gameId) === -1) {
  //     game.push(data.gameId);
  //   }
  //   socket.join(data.gameId);
  //   players.push({ id: socket.id, gameId: data.gameId, deck: randomDeck() });

  //   if (players.filter(player => player.gameId === data.gameId).length > 2) {
  //     socket.emit("fullGame")
  //     console.log('full gamex')
  //   }
    
  // })

  // socket.on("disconnect", () => {
  //   log(socket.id, " disconnected")
  //   //removes player from players array
  //   players.map((player, i) => {
  //     if (player.id === socket.id) {
  //       players.splice(i, 1);
  //     }
  //   })

  // })
})

//live updating
// setInterval(() => {
//   let data = { game: game, players: players }
//   io.emit('update', data)
// }, 1);

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set Static Folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

server.listen(PORT, () => log(`I'm listening on port ${PORT}`))

