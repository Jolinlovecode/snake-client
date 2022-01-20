
let connection = require("./play.js");

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  

  stdin.on("data", handleUserInput);
  
  return stdin;
};

const handleUserInput = function(key) {
  conn.write(key);

  if (key === "x") {
    process.exit();
    return;
  }

  if (key === "w") {
    connection.write("Move: up");
    return;
  }

  if (key === "a") {
    connection.write("Move: left");
    return;
  }

  if (key === "s") {
    connection.write("Move: down");
    return;
  }

  if (key === "d") {
    connection.write("Move: right");
    return;
  }

  if (key === "m") {
    connection.write("say_____");
    return;
  }

};



 module.exports = setupInput;