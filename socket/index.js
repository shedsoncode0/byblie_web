const io = require("socket.io")(443, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");
  // send a message to the client
//   socket.emit("hello from server", 1, "2", { 3: Buffer.from([4]) });

//   // receive a message from the client
//   socket.on("hello from client", (...args) => {
//     // ...
//   });
});
