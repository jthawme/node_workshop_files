// We are now requiring a different external module called 'request'
var request = require('request');
 
// We make a variable for our 'API endpoint'
var url = 'https://api.kanye.rest';

// Request goes to the url and returns the response
request(url, function(error, response, body) {
    // The kanye west API returns 'JSON' so we need to
    // 'parse' this data into an object
    var parsedBody = JSON.parse(body);

    // Backslash n ('\n') is a line break
    // So we just add some line breaks 
    console.log("\n\n");
    console.log(parsedBody.quote);
    console.log("\n\n");
});