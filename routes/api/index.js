const Router = require('express').Router();

const apiRoutes = require('./api-routes');
// const homeRoutes = require('./home-routes.js');
// const exerciseRoutes = require('./home-routes.js');
// const statsRoutes = require('./home-routes.js');

// Router.use('/', homeRoutes);
Router.use('/workouts', apiRoutes);
// Router.use('/exercise', exerciseRoutes);
// Router.use('/stats', statsRoutes);

module.exports = Router;