const pwd = (cmd, done) => {
    if (cmd === 'pwd') {
        //get working directory and log
        done(process.cwd());
    }
}

module.exports = pwd;