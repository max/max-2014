var connect = require('connect');

connect.createServer(
  connect.logger(),
  connect.static(__dirname + '/public', {maxAge: 1000*60*60*24})
).listen(process.env.PORT || 5000);
