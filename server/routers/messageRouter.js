import Express  from "express";

import {sendMessage,getMessages} from "../controllers/messageController.js"
import { aprenantAuthValidation, mentorAuthValidation } from "../middelwares/jwt.js";



export const messageRouter = Express.Router()

messageRouter.post("/sendMessages",mentorAuthValidation,aprenantAuthValidation,sendMessage)
messageRouter.get("/getMessages",mentorAuthValidation,aprenantAuthValidation,getMessages)

