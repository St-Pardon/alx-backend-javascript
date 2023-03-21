const express = require('express');

const PORT = 1245;
const app = express();

app.get('/', (req, res) => {
  res.status(200);
  res.end('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server running on http:127.0.0.1:${PORT}`);
});

module.exports = app;
