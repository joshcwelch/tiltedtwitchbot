var tmi = require('tmi.js');

var options = {
    options: {
      debug: true
    },
    connection: {
      cluster: "aws",
      reconnect: true
    },
    indentity: {
      username: "TiltedTwtichBot",
      password: "oauth:c680qm7fs95s0k4y8xo091r3x2mf2p"
    },
    channels: ["JPlanetTV"]

};

var client = new tmi.client(options);
client.connect();

client.on('connect', function(address, port) {
  client.action("JPlanetTV", "Hello twitch. Be good. I am Tilted.");
});
