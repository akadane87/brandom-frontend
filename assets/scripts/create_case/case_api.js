'use strict';

const app = require('../app');

const getCase = function() {
  return $.ajax({
    url: app.host + '/random_case',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

module.exports = {
  getCase,
};
