
const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/api/radars', (req, res) => {
  const results = [];
  fs.createReadStream('data/radars.csv')
    .pipe(csv({ separator: ';' }))
    .on('data', (data) => results.push(data))
    .on('end', () => {
      res.json(results);
    });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
