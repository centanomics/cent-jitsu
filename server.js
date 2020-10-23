const log = require('debug')('server:log');
const express = require('express');

const app = express();

//define ports
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  log(`Server is listening on port ${PORT}`);
  console.log(`lolServer is listening on port ${PORT}`)
})

