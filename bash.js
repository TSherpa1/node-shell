const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat')
const curl = require('./curl')
const date = require('./date')
const echo = require('./echo')
const head = require('./head')

process.stdout.write('promt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    //process.stdout.write('You typed: ' + cmd);
    // if (cmd === 'pwd') {
    //     //get working directory and log
    //     process.stdout.write(process.cwd());
    // }
    pwd(cmd, done);
    ls(cmd, done);
    cat(cmd, done);
    curl(cmd, done)
    date(cmd, done)
    echo(cmd, done)
    //process.stdout.write('\npromt > ');

})

const done = (output) => {
    process.stdout.write(output)
    process.stdout.write('\npromt > ');
}