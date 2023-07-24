import  Express  from "express";

import {launchMentoringSession} from "../controllers/sessionController.js"
import {mentorAutorisation} from "../middelwares/jwt.js"

export const sessionRouter = Express.Router()

sessionRouter.post("/launchSession",launchMentoringSession)