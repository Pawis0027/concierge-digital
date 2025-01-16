import express from 'express';
import { corsMiddleware, corsOptions } from './middleware/cors.js';

const app = express();

app.use(corsMiddleware);

app.options('*', (req, res, next) => {
  res.set(corsOptions);
  next();
});

app.get('/', (req, res) => {
  res.send('</h1>¡Hola, mundo!</h1>');
});

app.get('/movies', (req, res) => {
    res.send('</h1>¡Hola, Paolo!</h1>');
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});