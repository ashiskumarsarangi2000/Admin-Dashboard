const express = require('express');
const app = express();

app.get('/home', (req, res) => {
  res.send('Hii I am Ashis');
});

app.listen(5050, () => {
  console.log('Server started on port 5050');
});
