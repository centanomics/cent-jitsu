const log = require('debug')('server:log');
const express = require('express');

const app = express();

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set Static Folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

//define ports
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  log(`Server is listening on port ${PORT}`);
  console.log(`lolServer is listening on port ${PORT}`)
})

