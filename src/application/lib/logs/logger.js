'use strict';

const config = require(`${__dirname}/../../config/application`);
const bunyan = require('bunyan');

module.exports = bunyan.createLogger({name: config.application.name});