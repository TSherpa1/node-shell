const pwd = (cmd) => {
    if (cmd === 'pwd') {
        //get working directory and log
        process.stdout.write(process.cwd());
        process.stdout.write('\npromt > ');
    }
}

module.exports = pwd;