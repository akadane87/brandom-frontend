'use strict';

const case_api = require('./case_api.js');
const case_ui = require('./case_ui.js');
const getFormFields = require('../../../lib/get-form-fields.js');



// const randomCase = function() {
//   let caseNum = Math.random();
//   if (caseNum < .26) {
//     caseNum = "case1";
//     console.log("case1");
//   } else if (caseNum < .51 && caseNum > .26)  {
//     caseNum = "case2";
//     console.log("case2");
//   } else if (caseNum < .76 && caseNum > .51) {
//     caseNum = "case3";
//     console.log("case3");
//   } else {
//     caseNum = "case4";
//     console.log("case4");
//   }
// };

const onGetCase = function(event) {
  event.preventDefault();
  // randomCase();
  case_api.getCase()
    .then(case_ui.createCaseSuccess)
    .fail(case_ui.fail);
};



const addHandlers = () => {
  $('#create_case').on('click', onGetCase);

};


module.exports = {
  addHandlers,
  onGetCase,

};
