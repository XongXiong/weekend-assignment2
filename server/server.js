var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var port = 5000;

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended:true}));

app.post('/calculator', function(req, res) {
    console.log(req.body);
    // Create variabes serverside to make things look prettier
    var x = parseInt(req.body.x);
    var y = parseInt(req.body.y);
    var operator = req.body.operator;
    var result = 0;
    // Run switch statement to run calculations to return a result. 
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
    
    res.send({result});
}) 

app.listen(port , function(){
    console.log('listening on port', port);
})