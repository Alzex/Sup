const mysql = require('mysql');
const config = require('../configuration/config');

const { db } = config();

const pool = mysql.createPool({
  ...db
});

module.exports = pool;
