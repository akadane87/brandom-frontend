'use strict';

const auth_api = require('./auth_api.js');
const auth_ui = require('./auth_ui.js');
const getFormFields = require('../../../lib/get-form-fields.js');

const onSignUp = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  auth_api.signUp(data)
  .then(auth_ui.success)
  .fail(auth_ui.error);
};

const onSignIn = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  auth_api.signIn(data)
  .then(auth_ui.signInSuccess)
  .fail(auth_ui.failure);
};

const onSignOut = function(event){
  event.preventDefault();
  auth_api.signOut()
  .then(auth_ui.signOutSuccess)
  .fail(auth_ui.failure);
};

const onChangePassword = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  auth_api.changePassword(data)
  .then(auth_ui.changePasswordSuccess)
  .fail(auth_ui.failure);
};

// const dropdownMenuClick = function(event){
//   $('.dropdown-menu').toggleClass('show');
//
// };


const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  // $('#dropdownMenu1').on('click', dropdownMenuClick);
};


module.exports = {
  // onSignUp,
  // onSignIn,
  // onSignOut,
  // onChangePassword,
  addHandlers,
};
