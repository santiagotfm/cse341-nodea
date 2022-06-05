const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Edna Torres');
});

module.exports = routes;