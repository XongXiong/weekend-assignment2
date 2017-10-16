$(document).ready(main);

function main() {
    launchCalc();
    clickHandler();
}

// This launches the calculator on start and also contains code to reset the calculator
function launchCalc() {
    $('#inputs').empty();
    $('#calculator').prepend('<div id="inputs"><div id= "calcLine"><input type="number" placeholder="Enter Number Here" id="x"><input type="number" placeholder="Enter Number Here" id="y"></div><div id="operators" ><button class="opBut" id="add">+</button><button class="opBut" id="subtract">-</button><button class="opBut" id="multiply">*</button><button class="opBut" id="divide">/</button></div></div>');
}

// Hosting all click handlers here for readability
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

// Resets the result section and replaces it with the default line
function resetResult() {
    $('#results').empty();
    $('#result').replaceWith('<div id="result">Result = Well you have to calculate something dummy ;P</div>')
}

// Defines the operator on start
var operator = '';

// Functions to change the operator when the use selects the button corresponding to the operator
function adding() {
    operator = '+';
    $('.opBut').removeClass('selectedButton');
    $(this).addClass('selectedButton');
}

function subtracting() {
    operator = '-';
    $('.opBut').removeClass('selectedButton');
    $(this).addClass('selectedButton');
}

function multiplying() {
    operator = '*';
    $('.opBut').removeClass('selectedButton');
    $(this).addClass('selectedButton');
}

function dividing() {
    operator = '/';
    $('.opBut').removeClass('selectedButton');
    $(this).addClass('selectedButton');
}

// After clicking the calculate button, calculate function takes in the input values the user has entered and then sends the inputs along with the selected operator to the server to run calculations. 
function calculate() {
    var x = $('#x').val();
    var y = $('#y').val();
    $.ajax({
        method: 'POST',
        url: '/calculator',
        data: { x, y, operator }
    }).done(function (response) {
        if (response.result === null) {
            alert('Enter numbers before hitting operator!');
        }
        // Uses the result returned from the server and posts it to the DOM
        $('#result').text("Result = " + response.result);
    }).fail(function (message) {
        console.log('error', message);
    })
}
