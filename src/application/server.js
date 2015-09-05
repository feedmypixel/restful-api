'use strict';

const express = require('express');
const config = require(`${__dirname}/config/application`);
const cookieParser = require('cookie-parser');
const session = require('express-session');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const logger = require('morgan');

const routes = require(`${__dirname}/routes`);
const port = Number(process.env.port || config.application.port);
const app = express();
const detailedLogger = require(`${__dirname}/lib/logs/logger`);

app.use(cookieParser(config.application.cookie.secret));
app.use(session({
    secret: config.application.session.secret,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

routes(express, app);

app.listen(port, () => {
    detailedLogger.info('app is up!');
    console.log(`listening on port: ${port}`);
});