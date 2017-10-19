var express = require('express');
var app = express();

var logger = require('./logger');
app.use(logger);

// app.get('/', function(request, response) {
//   response.sendFile(__dirname + '/public/index.html');
// });
// can be used as follows since static is installed middleware shipped with express
app.use(express.static('public'));
//when using middleware, you must call next for the follow on function to run

// app.use(function (request, response, next) {
//
//   next();
// });
// app.use(function (request, response, next) {
//   response.send('done!');
//   // if next(); is placed here and there is not a follow on 'app.use ' then there will be an error
// });
app.get('/blocks', function(request, response) {
  var blocks = ['Fixed', 'Movable', 'Rotating'];
    response.json(blocks);
})

app.listen(3000);
console.log("Ok, we're on 3k!! GO!");
