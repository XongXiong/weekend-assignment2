var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var port = 5000;

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended:true}));

app.post('/calculator', function(req, res) {
    console.log(req.body);
    var x = parseInt(req.body.x);
    var y = parseInt(req.body.y);
    var operator = req.body.operator;
    var result = 0;
    switch(operator) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
    }
    console.log(result);
    resultObj = {result}
    console.log(resultObj);
    res.send(resultObj);
}) 

app.listen(port , function(){
    console.log('listening on port', port);
})