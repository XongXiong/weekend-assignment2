$(document).ready(main);

function main() {
    clickHandler();
}

function clickHandler() {
    // For Operators
    $('#add').on('click', adding);
    $('#subtract').on('click', subtracting);
    $('#multiply').on('click', multiplying);
    $('#divide').on('click', dividing);
    // For posting to server 
    $('#calculate').on('click', calculate)
}

var operator = '';

function adding(){
    operator = '+';
}

function subtracting(){
    operator = '-';
}

function multiplying(){
    operator = '*';
  
}

function dividing(){
    operator = '/';
}

function calculate() {
    var x = $('#x').val();
    var y = $('#y').val();
    $.ajax({
        method: 'POST',
        url: '/calculator',
        data: {x, y, operator}
    }) .done(function(response){
        console.log('calculate POST:', response);
        result(response);
    }) .fail(function(message){
        console.log('error', message);
    })
}

function result(response){
    var result = response.result;
    console.log(result);
    $('#result').text("Result = " + result);
}