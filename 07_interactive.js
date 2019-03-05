// We are now requiring a different external module called 'request'
var request = require('request');
var prompt = require('select-prompt');

// We create an 'array' of options
const directions = [
	{title: 'Up',    value: 'up'},
	{title: 'Down', value: 'down'},
	{title: 'Left',  value: 'left'},
	{title: 'Right',   value: 'right'},
]

// We make a function to ask which direction to choose
// So that we can keep asking it
function askDirection() {
    // console.log("\n");
    console.log('If you want to quit, press [ctrl + c]');

    // Here we use the select-prompt package
    prompt('Which direction?', directions)
        // Things like '.on' or '.then' are called promises, theyre like callbacks
        .on('submit', function(direction) {

            // When we get the direction we call the moveDirection function
            // with that specific direction
            moveDirection(direction);
        });
}

// This function requests a url that makes the box move
// Its either /up, /down, /left or /right
function moveDirection(direction) {
    // This console displays the current direction
    console.log("Moving the box - " + direction);
    
    request("http://move.jthaw.me/" + direction, function(error, response, body) {
        console.log(body);

        // When we get the callback we ask the question again
        askDirection();
    });
}

askDirection();