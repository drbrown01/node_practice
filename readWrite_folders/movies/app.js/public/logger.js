module.exports = function logger(request, response, next) {
  var start = +new Date();
  var stream = process.stdout;
  var url = request.url;
  var method = request.method;

  response.on('finsh', function() {
    var duration = +new Date(); - start;
    var message = method + 'to' + url +
    '\ntook' + duration + 'ms \n\n';
    stream.write(message);

  })


  next();

}
