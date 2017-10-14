$(document).ready(main);

function main() {
    launchCalc();
    clickHandler();
}

function launchCalc() {
    $('#inputs').empty();
    $('#calculator').prepend('<div id="inputs"><div id= "calcLine"><input type="number" placeholder="Enter Number Here" id="x"><input type="number" placeholder="Enter Number Here" id="y"></div><div id="operators"><button class="opBut" id="add">+</button><button class="opBut" id="subtract">-</button><button class="opBut" id="multiply">*</button><button class="opBut" id="divide">/</button></div></div>');
}

function clickHandler() {
    // For Operators
    $('#calculator').on('click', '#add', adding);
    $('#calculator').on('click', '#subtract', subtracting);
    $('#calculator').on('click', '#multiply', multiplying);
    $('#calculator').on('click', '#divide', dividing);
    // For posting to server 
    $('#calculate').on('click', calculate);
    $('#reset').on('click', launchCalc).on('click', resetResult);
}

function resetResult(){
    $('#results').empty();
    $('#result').replaceWith('<div id="result">Result = Well you have to calculate dummy</div>')
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

