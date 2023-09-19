import express from 'express';

import connectToDatabase from './helper.mjs';

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hi there!</h1>');
});

await connectToDatabase();

app.listen(3000);
