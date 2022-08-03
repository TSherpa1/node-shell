const fs = require("fs")

const head = (cmd, done) => {
    const arr = cmd.split(" ");
    if(arr[0] === "head"){
        fs.readFile(`./${arr[1]}`, (err, data) => {
            if (err) throw err;
                
            done(data);
         
        });
    }

}

module.exports = head;