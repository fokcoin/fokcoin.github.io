const express = require('express');
const server = express();

server.use(express.static(__dirname + '/app'));

server.listen(8080, () => {
  console.log('Flipcoin dev server running on http://localhost:8080');
});
