const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  

  stdin.on("data", handleUserInput);
  

  return stdin;
};

const handleUserInput = function (message) {
  conn.write(message);
};

 module.exports = setupInput;