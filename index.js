const express = require('express');

(async () => {
  const app = express();
  const port = 5555;

  app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log('JAMEEEEEEEEEEEEEEEEEEEEEEEEEEEEL')
  });

  app.listen(port, () => {
    console.log(`Server http listening at http://localhost:${port}`);
  });
})()