'use strict';

const app = require('../app.js');
const projects_events = require('../projects/projects_events.js');


const signInSuccess = (data) => {
  app.user = data.user;
  console.log(data.user);
  projects_events.onListProjects();
};

const signOutSuccess = (data) => {
  // $( ".gameStat_wrapper" ).hide();
  // $( "#create_game" ).hide();
  // $( "#sign-out" ).hide();
  //
  // $( "#sign-up-btn" ).show();
  // $( "#sign-in-btn" ).show();
  // $( "#change-password" ).hide();
  // $("#modal-2").modal('hide');

};

const changePasswordSuccess = () => {
  // $("#modal-3").modal('hide');
};

const success = (data) => {
  window.alert("COOOOOL")
  // $("#modal-1").modal('hide');
  // $( "#change-password" ).show();
  // $( "#sign-up-btn" ).hide();
  console.log(data);
};

const failure = (error) => {
  console.log('fuck me bum')
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess
};
