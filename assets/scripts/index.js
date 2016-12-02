'use strict';

const authEvents = require('./auth/auth_events.js');
const caseEvents = require('./create_case/case_events.js');
const projectEvents = require('./projects/projects_events.js');
$(() => {
  console.log('handler check');
  authEvents.addHandlers();
  caseEvents.addHandlers();
  projectEvents.addHandlers();
  // gameEvents.addEventHandlers();
  // $('#game_board').hide();
  // $( ".gameStat_wrapper" ).hide();
  // $( "#create_game" ).hide();
  // $( "#sign-out" ).hide();
  // $( "#sign-out" ).hide();
  // $( "#change-password" ).hide();
  $('#SignIn_email').val('pa@pa')
  $('#SignIn_password').val('pa')
  $('#sign-in-button').click();
});
