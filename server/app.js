import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import WebSocket from "ws";
import cookieParser from "cookie-parser"

import {adminRouter} from "./routers/adminRouter.js"
import {mentorRouter} from "./routers/mentorRouter.js"
import {aprenantRouter} from "./routers/aprenantRouter.js"
import {userRouter} from "./routers/userRouter.js"
import {sessionRouter} from "./routers/sessionRouter.js"
import {sessionFeedbackRouter} from "./routers/sessionFeedbackRouter.js"
import { mentorshipRequestRouter} from "./routers/mentorshipRequestRouter.js"
import { messageRouter } from "./routers/messageRouter.js";

dotenv.config();
const port = process.env.PORT;
const dbURI = process.env.DBURI;

const app = express();
mongoose.set("strictQuery", true);
mongoose
  .connect(dbURI)
  .then((result) => {
    app.listen(port, () => {
      console.log(`this app is running in port http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

  
  // web socket

// const wss = new WebSocket.Server({ port: 8080 }); 

// wss.on('connection', (ws) => {
//   console.log('WebSocket client connected');

//   ws.on('message', (message) => {
//     console.log(`Received message: ${message}`);
//     // handle the incoming message from the client
//   });

//   ws.on('close', () => {
//     console.log('WebSocket client disconnected');
//   });
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use("/admins",adminRouter)
app.use("/mentors",mentorRouter)
app.use("/aprenants",aprenantRouter)
app.use("/users",userRouter)
app.use("/sessions",sessionRouter)
app.use("/sessionFeedbacks",sessionFeedbackRouter)
app.use("/requests",mentorshipRequestRouter)
app.use("/message",messageRouter)
