const request = require('request')

const curl = (cmd, done) => {
    const arr = cmd.split(" ");
    if(arr[0] === "curl"){
        request(`${arr[1]}`, function (error, response, body) {
            //console.error('error:', error); // Print the error if one occurred
            done(body); // Print the HTML for the Google homepage.
          });
          
 
    }
}

module.exports = curl