'use strict';
//remove signIn and signOut
const app = require('../app.js');


// function renderItem(item){
// let template = `<div data-item="${item.id}" class="case_study">
//   <h3>Case 1</h3>
//
//   <div class="data_box"><p>Brand:${item.brand}</p></div>
//   <div class="data_box"><p>Mock-Up:${item.mockup}</div>
//   <div class="data_box"><p>Medium:${item.medium}</div>
//   <br>
//
//     <form id="case1_form" class="form-group">
//       <input type="url" class="form-control" id="case1_url" placeholder="Enter URL" name="credentials[email]">
//       <button id="case1_submit" type="submit" class="btn btn-primary">Submit</button>
//     </form>
// </div>`
// $('.case_study2').html(template);
// }

const createCaseSuccess = (data) => {
  let cas = data[0];
  app.random_case = data[0];
  window.app = app;
  $('.data_box.brand').html(cas.brand);
  $('.data_box.medium').html(cas.medium);
  $('.data_box.mockup').html(cas.mockup);




  // renderItem(data[0]);
};




const success = (data) => {
  // $("#modal-1").modal('hide');
  // $( "#change-password" ).show();
  // $( "#sign-up-btn" ).hide();
  console.log(data);
};

const failure = (error) => {
  console.log('ah fuck');
};

module.exports = {
  failure,
  success,
  createCaseSuccess,
};
