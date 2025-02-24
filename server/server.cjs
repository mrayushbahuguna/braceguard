const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("New device connected:", socket.id);

  socket.on("sendLocation", (data) => {
    console.log("Location received:", data);
    io.emit("receiveLocation", data);
  });

  socket.on("disconnect", () => {
    console.log("Device disconnected:", socket.id);
  });
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
