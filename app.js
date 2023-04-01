import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import {adminRouter} from "./routers/adminRouter.js"
import {mentorRouter} from "./routers/mentorRouter.js"
import {aprenantRouter} from "./routers/aprenantRouter.js"
import {userRouter} from "./routers/userRouter.js"
import {sessionRouter} from "./routers/sessionRouter.js"
import {sessionFeedbackRouter} from "./routers/sessionFeedbackRouter.js"

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/admins",adminRouter)
app.use("/mentors",mentorRouter)
app.use("/aprenants",aprenantRouter)
app.use("/users",userRouter)
app.use("/sessions",sessionRouter)
app.use("/sessionFeedbacks",sessionFeedbackRouter)
