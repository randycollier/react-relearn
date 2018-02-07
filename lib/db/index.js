import config from 'config';
import { Pool } from 'pg';

console.log( 'user', config.db_user);
console.log( 'host', config.db_host);
console.log( 'database', config.db_name);
console.log( 'password', config.db_pass);
console.log( 'port', config.db_port);

const pool = new Pool({
  user: config.db_user,
  host: config.db_host,
  database: config.db_name,
  password: config.db_pass,
  port: config.db_port,
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1);
});

export default pool;

