'use strict';

const projects_api = require('./projects_api.js');
const projects_ui = require('./projects_ui.js');
const getFormFields = require('../../../lib/get-form-fields.js');

// const case_ui = require('./case_ui.js');

const onCreateProject = function(event){
  event.preventDefault();
  let project = getFormFields(event.target);
  projects_api.createProject(project)
  .then(data=>console.log(data))
  .fail(data=>console.log(data));
};

const onListProjects = function(){
  projects_api.listProjects()
  .then(projects_ui.listProjectsSuccess)
  .fail(console.log('list projects fail'));
};

const addHandlers = () => {
  $('#new-project-form').on('submit', onCreateProject);
};


module.exports = {
  addHandlers,
  onCreateProject,
  onListProjects,
};
