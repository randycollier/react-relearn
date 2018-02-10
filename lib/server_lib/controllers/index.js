const api = require('express').Router();
import humans from './humans';
import config from 'config';
import files from './files';

api.get('/', (req, res) => {
  res.status(200).json({ message: `${config.db_host},${config.db_name}` });
});

api.use('/humans', humans);
api.use('/files', files);


export default api;