import { createServer } from "http";
import { Server, Socket } from "socket.io";
const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CORS_ORIGIN || "*",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket: Socket) => {
  console.log("a user connected");
});

httpServer.listen(process.env.CHAT_PORT || 8080);
