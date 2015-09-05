'use strict';

const API_VERSION = '/v1';
const homeController = require(`${__dirname}/controllers/homeController`);

module.exports = (express, app) => {

    const router = express.Router();

    router.get(`${API_VERSION}/`, homeController.indexAction);

    app.use(router);
}