const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();

routes.post('/devs',DevController.store);
routes.post('/devs/:devId/likes',LikeController.store);
routes.post('/devs/:devId/dislikes',LikeController.store);
module.exports = routes;