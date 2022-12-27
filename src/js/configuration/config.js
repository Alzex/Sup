require('dotenv').config();

const config = () => {
  return {
    port: process.env.PORT || 8080,
    db: {
      connectionLimit: process.env.DB_CONNECTION_LIMIT || 10,
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 3306,
    }
  }
}

module.exports = config;
