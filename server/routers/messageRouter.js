import Express  from "express";

import {sendMessage,getMessages} from "../controllers/messageController.js"
import { aprenantAutorisation, mentorAutorisation } from "../middelwares/jwt.js";



export const messageRouter = Express.Router()

messageRouter.post("/sendMessages",mentorAutorisation,aprenantAutorisation,sendMessage)
messageRouter.get("/getMessages",mentorAutorisation,aprenantAutorisation,getMessages)

