/** @format */

const express = require("express");
const cors = require("cors");
const color = require("colors");
const morgan = require("morgan");
const http = require("http");

require("dotenv").config();

const connectDB = require("./server/database/connection");
const { verifyAccessToken } = require("./utils/jwt");

// Server PORT
const PORT = process.env.PORT || 8000;

// Connect to Database
connectDB();

// The main Server
const app = express();
const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  console.log("A user connected");
  // send a message to the client
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });
  socket.on("disconnect", () => {
    console.log("a user has disconnect");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});

// Server Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

app.get("/", verifyAccessToken, async (req, res) => {
  res.status(200).json({
    id: req.user.id,
    fullname: req.user.fullname,
    email: req.user.email,
  });
});

// Route Middlewares
app.use("/api/v1/auth", require("./server/routes/authRoute"));
app.use("/api/v1/user", require("./server/routes/userRoute"));
app.use("/api/v1/post", require("./server/routes/post_route"));
app.use("/api/v1/conversation", require("./server/routes/conversation_route"));
app.use("/api/v1/messages", require("./server/routes/messages_route"));

// Start the server
server.listen(PORT, () => {
  console.log("Server is up an Running on POST " + PORT.rainbow.underline);
});
