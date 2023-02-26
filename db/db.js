require('dotenv').config();

const pg = require('pg-promise');
const pgp = pg();

const db = pgp({
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: process.env.DB_PORT
})

module.exports = db;