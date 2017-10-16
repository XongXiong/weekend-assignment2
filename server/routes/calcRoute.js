var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    console.log(req.body);
    // Create variabes serverside to make things look prettier
    var x = parseInt(req.body.x);
    var y = parseInt(req.body.y);
    var operator = req.body.operator;
    var result = 0;
    // Run switch statement to run calculations to return a result. 
    switch (operator) {
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
    // Sends the result as an object to the client to post to the DOM
    res.send( {result:result} );
}) 

module.exports = router;