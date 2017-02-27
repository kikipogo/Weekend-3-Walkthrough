$(document).ready(function(){
console.log('js');

$('#clear').on('click', function(){
  // empty our inputs
  $('#num0').val('');
  $('#num1').val('');
  // clear answer
  $('#outputP').text('');
});


// operatorButton click event
$('.operatorButton').on('click', function(){
  // what type of operator is this?
  var myOperator = $(this).data('operator');
  console.log('in operator button click:', myOperator);
  // get user number input
  var num0 = $('#num0').val();
  var num1 = $('#num1').val();
  // assemble the object to send to the server
  var objectToSend = {
    x: num0,
    y: num1,
    type: myOperator
  };
  console.log('sending:', objectToSend);
  $.ajax({
    type: 'POST',
    url: '/math',
    data: objectToSend,
    success: function(response){
      console.log('back from ajax with:', response);
      // receive an answer
      // display answer on DOM
      $('#outputP').text(response.answer);
      }
    }); // end ajax
  }); // end operatorButton click

}); // end doc ready

// // TEST POST ROUTE
// var objectToSend = {
//   test: 'bzzzz'
// }; // end objectToSend
