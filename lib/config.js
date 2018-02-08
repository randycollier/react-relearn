module.exports = {
  port: process.env.PORT || 80,
  protocal: process.env.PROTOCAL || 'http',
  host: process.env.HOST || 'localhost',
  db_user: process.env.DB_USER || 'antidote',
  db_host: process.env.DB_HOST || 'localhost',
  db_name: process.env.DB_NAME || 'dbdemo',
  db_pass: process.env.DB_PASS || '',
  db_port: process.env.DB_PORT || 5432
};


