import  Express  from "express";

import {launchMentoringSession} from "../controllers/sessionController.js"
import {mentorAuthValidation} from "../middelwares/jwt.js"

export const sessionRouter = Express.Router()

sessionRouter.post("/launchSession",mentorAuthValidation,launchMentoringSession)