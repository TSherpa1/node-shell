const fs  = require ('fs')

const cat = (cmd, done) => {
    const arr = cmd.split(" ");
    if(arr[0] === "cat"){
        fs.readFile(`./${arr[1]}`, (err, data) => {
            if (err) throw err;
                done(data);
         
        });
    }
}

module.exports = cat