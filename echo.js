const echo = (cmd, done) => {
    const arr = cmd.split(" ");
    if(arr[0] === "echo"){
        arr.shift();
        done(arr.join(" "))
}
}
module.exports = echo