import express from 'express';
import userRoutes from './src/routes/user.route.js';

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});