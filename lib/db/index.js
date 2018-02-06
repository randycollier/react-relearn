import { Pool } from 'pg';

const pool = new Pool({
  user: 'antidote',
  host: 'localhost',
  database: 'dbdemo',
  password: 'rc0973!',
  port: 5432,
});

// pool.query('SELECT NOW()', (err, res) => {
  
//   console.log(err, res);
//   pool.end();
// });






export const query = (text, params, callback) => pool.query(text, params, callback)
export default pool;

