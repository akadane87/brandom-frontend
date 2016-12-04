'use strict';
//remove signIn and signOut
const app = require('../app.js');
const listProjectsTemplates = require('../templates/list-projects.handlebars');

const listProjectsSuccess = (data) => {
  console.log('List projects succeded');
  $('.project_content').html(listProjectsTemplates(data));
};


const success = (data) => {

  console.log(data);
};

const failure = (error) => {
  console.log('ah fuck');
};

module.exports = {
  failure,
  success,
  listProjectsSuccess,
};
