import Express  from "express";

import {sendMessage,getMessages} from "../controllers/messageController.js"

export const messageRouter = Express.Router()

messageRouter.post("/sendMessages",sendMessage)
messageRouter.get("/getMessages",getMessages)

