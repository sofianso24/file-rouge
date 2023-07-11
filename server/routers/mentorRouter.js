import  Express  from "express";

import {viewMentorProfile,updateMentorProfile,
    mentorSessionHistory,
    aprenantProgress} from "../controllers/mentorController.js"
import {mentorAuthValidation} from "../middelwares/jwt.js"

export const mentorRouter = Express.Router()


mentorRouter.get("/viewProfile/:id",viewMentorProfile)
mentorRouter.put("/modifierProfile/:id",mentorAuthValidation,updateMentorProfile)
mentorRouter.get("/sessionsHistory/:id",mentorAuthValidation,mentorSessionHistory)
mentorRouter.post("/aprenantProgress",mentorAuthValidation,aprenantProgress)
