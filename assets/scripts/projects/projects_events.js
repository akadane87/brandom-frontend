'use strict'

const projects_api = require('./projects_api.js');
const getFormFields = require('../../../lib/get-form-fields.js');

// const case_ui = require('./case_ui.js');

const onCreateProject = function(event){
  event.preventDefault();
  let project = getFormFields(event.target);
  projects_api.createProject(project)
  .then(data=>console.log(data))
  .fail(data=>console.log(data))


}


const addHandlers = () => {
  $('#new-project-form').on('submit', onCreateProject);
  // $('#dropdownMenu1').on('click', dropdownMenuClick);
};


module.exports = {addHandlers};
