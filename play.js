const connect = require("./client");

const net = require("net");

console.log("Connecting ...");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  

  stdin.on("data", handleUserInput);
  const handleUserInput = function (message) {
    conn.write(message);
  };

  return stdin;
};