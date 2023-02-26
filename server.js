const express = require('express');

require('./db/db');
require('dotenv').config();

const companyRoute = require("./router/router");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(process.env.PORT || 5700, () => {
    console.log('server running on PORT 5700')
})

app.get('/', (req, res, next) => {
    return res.send("Hello PG database");
});

app.use('/company', companyRoute);