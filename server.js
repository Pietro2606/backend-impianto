const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('Sito in costruzione');
});

app.listen(port, () => {
  console.log(`🚀 Backend in ascolto su http://localhost:${port}`);
});