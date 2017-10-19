var express = require('express');
var app = express();

app.get('/', function (request, response) {
  response.write("Hello world");
  response.end();
});
app.get('/blocks', function(request, response) {
  var blocks = ['Fixed', 'Movabel', 'Rotating'];
  response.json(blocks);
});


app.listen(3000);
