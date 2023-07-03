/** @format */

const express = require("express");
const cors = require("cors");
const color = require("colors");
const morgan = require("morgan");
require("dotenv").config();

const connectDB = require("./server/database/connection");
const { verifyAccessToken } = require("./utils/jwt");

// Server PORT
const PORT = process.env.PORT || 8000;

// Connect to Database
connectDB();

// The main Server
const app = express();

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
app.listen(PORT, () => {
  console.log("Server is up an Running on POST " + PORT.rainbow.underline);
});
