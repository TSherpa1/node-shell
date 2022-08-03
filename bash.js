const pwd = require('./pwd');
const ls = require('./ls');

process.stdout.write('promt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    //process.stdout.write('You typed: ' + cmd);
    // if (cmd === 'pwd') {
    //     //get working directory and log
    //     process.stdout.write(process.cwd());
    // }
    pwd(cmd);
    ls(cmd);
    //process.stdout.write('\npromt > ');

})