'use strict';

const case_api = require('./case_api.js');
const case_ui = require('./case_ui.js');
const getFormFields = require('../../../lib/get-form-fields.js');

// const onSignUp = function(event){
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   auth_api.signUp(data)
//   .then(auth_ui.success)
//   .catch(auth_ui.failure);
// };
//
// const onSignIn = function(event){
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   auth_api.signIn(data)
//   .then(auth_ui.signInSuccess)
//   .catch(auth_ui.failure);
// };
//
// const onSignOut = function(event){
//   event.preventDefault();
//   auth_api.signOut()
//   .then(auth_ui.signOutSuccess)
//   .catch(auth_ui.failure);
// };
//
// const onChangePassword = function(event){
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   auth_api.changePassword(data)
//   .then(auth_ui.changePasswordSuccess)
//   .catch(auth_ui.failure);
// };
//
// // const dropdownMenuClick = function(event){
// //   $('.dropdown-menu').toggleClass('show');
// //
// // };



const randomCase = function() {
  let caseNum = Math.random();
  if (caseNum < .26) {
    caseNum = "case1";
    console.log("case1");
  } else if (caseNum < .51 && caseNum > .26)  {
    caseNum = "case2";
    console.log("case2");
  } else if (caseNum < .76 && caseNum > .51) {
    caseNum = "case3";
    console.log("case3");
  } else {
    caseNum = "case4";
    console.log("case4");
  }
};

const onGetCase = function(event) {
  event.preventDefault();
  randomCase();
  case_api.getCase()
    .then(case_ui.createCaseSuccess)
    .fail(case_ui.fail);
};

const addHandlers = () => {
  $('#create_case').on('click', onGetCase);

};


module.exports = {
  addHandlers,
};
