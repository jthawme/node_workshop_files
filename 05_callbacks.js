// We are now requiring a different external module called 'figlet'
var figlet = require('figlet');
 
// We are making a variable called text
var text = 'Hello CTL!';

// These options can change what the output of
// the figlet function will look like
var options = {
    // Find more font options here:
    // http://www.figlet.org/examples.html
    font: 'big'
};

// Here we call the figlet function, but we also
// give it a function as its last 'argument'
// This is the callback.
figlet(text, options, function(err, data) {
    console.log(data)
});