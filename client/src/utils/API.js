// api for the game
import openSocket from 'socket.io-client';
const ENDPOINT = process.env.API_URL || "http://127.0.0.1:5000";
const socket = openSocket(ENDPOINT);

const subscribeToTimer = (interval, cb) => {
  socket.emit('subscribeToTimer', interval)
  socket.on('timer', players => cb(null, players));
}

const addPlayer = (gameId, cb) => {
  socket.emit('playerAdd', { gameId });
  socket.on('fullGame', player => cb(player));
}

const getPlayerId = async (cb) => {
  // console.log(socketId)
  await socket.on('connect', () => {
    cb(socket.id)
  });
}


export { subscribeToTimer, addPlayer, getPlayerId }