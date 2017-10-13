$(document).ready(main);

function main() {
    clickHandler();    
}

function clickHandler() {
    $('#operators').on('click','#add', adding);
    $('#operators').on('click','#subtract', subtracting);
    $('#operators').on('click','#multiply', multiplying);
    $('#operators').on('click','#divide', dividing);
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

