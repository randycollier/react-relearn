const api = require('express').Router();
import humans from './humans';

api.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

api.use('/humans', humans);

export default api;