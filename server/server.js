var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var port = 5000;
var calculator = require('./routes/calcRoute.js')

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('server/public'));

app.use('/calculator', calculator);

app.listen(port , function(){
    console.log('listening on port', port);
})