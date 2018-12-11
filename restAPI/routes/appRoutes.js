'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/appController');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.get_a_rating);
}
