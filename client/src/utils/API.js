// api for the game
import openSocket from 'socket.io-client';
const ENDPOINT = process.env.API_URL || "http://127.0.0.1:5000";
const socket = openSocket(ENDPOINT);

const subscribeToTimer = (interval, cb) => {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', interval)
}

export { subscribeToTimer }