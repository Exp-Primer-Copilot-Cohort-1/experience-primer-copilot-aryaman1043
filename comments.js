// create web server
const express = require('express');
const app = express();
// create a port
const port = 3000;

// create a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// listen to the port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});