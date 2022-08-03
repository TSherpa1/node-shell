const date = (cmd, done) => {
    if(cmd === "date"){
        const date = new Date()
        done(date.toString());
    }
}

module.exports = date;