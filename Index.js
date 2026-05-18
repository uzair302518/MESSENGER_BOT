const login = require("facebook-chat-api");

login({ appState: require("./appstate.json") }, (err, api) => {
  if (err) return console.log(err);

  console.log("Bot Online 😄");

  api.listenMqtt((err, event) => {
    if (err) return console.log(err);

    if (event.type !== "message") return;

    const msg = event.body?.toLowerCase();

    // Auto reply
    if (msg === "hi") {
      api.sendMessage("Hello 👀", event.threadID);
    }

    // Menu command
    if (msg === "menu") {
      api.sendMessage(
        "Commands:\nmenu\nowner\nhello",
        event.threadID
      );
    }

    // Custom command
    if (msg === "owner") {
      api.sendMessage("Owner: 𝐃𝐄𝐕𝐈𝐋 𝐘𝐎𝐔𝐍𝐆𝐒𝐓𝐄𝐑𝐒 😈☠️", event.threadID);
    }

    if (msg === "hello") {
      api.sendMessage("Bot online hai 😄", event.threadID);
    }
  });
});
