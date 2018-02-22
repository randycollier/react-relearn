import express from 'express';
const humans = express.Router();
import db from 'db';

humans.get('/',  async (req, res) => {
  const { rows } = await db.query('SELECT * FROM humans');
  res.send(rows);
});

humans.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { rows } = await db.query('SELECT * FROM humans WHERE id = $1', [id]);
  res.send(rows[0]);
});

export default humans;