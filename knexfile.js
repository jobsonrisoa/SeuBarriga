module.exports = {
  test: {
    client: 'pg',
    version: '12.9',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'senha',
      database: 'barriga',
    },
    migrations: {
      directory: 'src/migrations',
    },
  },
};