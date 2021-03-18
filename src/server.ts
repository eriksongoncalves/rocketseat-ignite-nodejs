import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ ok: true });
});

app.listen('3333', () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port 3333');
});
