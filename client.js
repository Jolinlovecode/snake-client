// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: // IP address here,
    port: // PORT number here,
  });
  
  conn.on('connect', function(){
    console.log("Successfully connected to game server.");
  });

  conn.on('data', function(name){
    console.log("Name:", name);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;