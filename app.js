var irc = require("tmi.js");

var options = {
    options: {
        debug: true
    },
    connection: {
        cluster: "aws",
        reconnect: true
    },
    identity: {
        username: "TiltedTwitchBot",
        password: "oauth:cf3d8qx7fvkh51202xxqkx5y52m8z3"
    },
    channels: ["#jplanettv"]
};

var client = new irc.client(options);

// Connect the client to the server..
client.connect();

client.unhost("HardleyDifficult");
