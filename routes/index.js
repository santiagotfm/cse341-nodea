const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Santiago Montoya');
});

module.exports = routes;