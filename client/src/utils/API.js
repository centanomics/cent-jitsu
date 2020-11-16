// api for the game
import openSocket from 'socket.io-client';
const ENDPOINT = process.env.API_URL || "http://127.0.0.1:5000";
const socket = openSocket(ENDPOINT);

const subscribeToTimer = (interval, cb) => {
  socket.on('timer', players => cb(null, players));
  socket.emit('subscribeToTimer', interval)
}

const addPlayer = (gameId, cb) => {
  socket.emit('playerAdd', { gameId });
  socket.on('fullGame', player => cb(player));
}


export { subscribeToTimer, addPlayer }