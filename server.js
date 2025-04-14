const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

// Rotta principale
app.get('/', (req, res) => {
  res.send('<h1>Sito in costruzione</h1>');
});

// Avvio server
app.listen(port, () => {
  console.log(`🚀 Backend in ascolto su http://localhost:${port}`);
});
