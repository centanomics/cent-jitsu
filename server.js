// debug not working
const cors = require('cors')
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

//define ports
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

const index = require('./routes/index');
app.use(index);

const server = http.createServer(app);
const io = socketIo(server);

//game variables
let interval;
let game = [];
let players = []

io.on("connection", (socket) => {
  console.log(socket.id, " connected")

  // add game room to games (if not there already) and join room
  socket.on("gameCreate", data => {
    if (game.findIndex((gameId) => gameId === data.gameId) === -1) {
      game.push(data.gameId);
    }
    socket.join(data.gameId);
    players.push({ id: socket.id, gameId: data.gameId });

    if(players){}
    
  })

  socket.on("disconnect", () => {
    console.log(socket.id, " disconnected")

  })
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

