var express = require('express');
var app = express();

app.use(express.logger('dev'));
app.use(express.static(__dirname + '/public', { maxAge: 86400000 }));
app.listen(process.env.PORT || 5000);
