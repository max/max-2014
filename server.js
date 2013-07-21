var express = require('express');
var app = express();
app.use(express.logger('dev'));
app.use('/', express.static('public', {maxAge: 1000*60*60*24}));
app.listen(process.env.PORT || 5000);
