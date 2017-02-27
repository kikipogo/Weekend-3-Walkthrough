// requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path'); // join paths

var port = 3000;

// uses
app.use( express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// spin up server
app.listen(port, function(){
  console.log('we are trying something else on port:', port);
}); // end server up


// ROUTES

// home base
app.get('/', function (req, res){
  console.log('home base url hit');
  res.sendFile(path.resolve('public/views/index.html')); // explicit path -- would resolve path despite not being in static folder
});

// do math
app.post('/math', function(req, res){
  // receive the object from client
  console.log('in math post:', req.body);
  // determine the operator based on req.body.type
  // do correct math
  if(req.body.type == 'add'){
    console.log('adding');
    var answer = Number(req.body.x) + Number(req.body.y);
  }
  else if(req.body.type == 'subtract'){
    console.log('subtract');
    answer = Number(req.body.x) - Number(req.body.y);
  }
  else if(req.body.type == 'multiply'){
    console.log('multiply');
    answer = Number(req.body.x) * Number(req.body.y);
  }
  else if(req.body.type == 'divide'){
    console.log('divide');
    answer = Number(req.body.x) / Number(req.body.y);
  }
  // return answer as object
  var objectToSend = {
    answer: answer
  } // end object to send 
  res.send(objectToSend);
}) // end do math
