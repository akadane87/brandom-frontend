'use strict';

const app = require('../app');

const createProject = function(data) {
  let proj = data;
  proj.project.case_id = app.random_case.id;
  return $.ajax({
    url: app.host + '/projects',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data:proj
  });
};



const listProjects = function() {
  return $.ajax({
    url: app.host + '/projects',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};


// const createProject = function(data) {
//   let proj = data;
//   proj.project.case_id = app.random_case.id;
//   return $.ajax({
//     url: app.host + '/projects',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//     data:proj
//   });
// };

module.exports = {
  createProject,
  listProjects,
};
