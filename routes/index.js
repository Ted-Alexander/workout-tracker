const Router = require('express').Router();

const apiRoutes = require('./api/api-routes.js');
const homeRoutes = require('./home-routes.js');

Router.use('/', homeRoutes);
Router.use('/api', apiRoutes);

module.exports = Router;