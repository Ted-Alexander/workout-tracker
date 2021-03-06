const Router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes');
// const exerciseRoutes = require('./home-routes.js');
// const statsRoutes = require('./home-routes.js');

Router.use('/', homeRoutes);
Router.use('/api', apiRoutes);
// Router.use('/exercise', exerciseRoutes);
// Router.use('/stats', statsRoutes);

module.exports = Router;