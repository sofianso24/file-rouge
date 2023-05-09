import  Express  from "express";

import {viewMentorProfile,updateMentorProfile,
    mentorSessionHistory} from "../controllers/mentorController.js"
import {mentorAuthValidation} from "../middelwares/jwt.js"

export const mentorRouter = Express.Router()


mentorRouter.get("/viewProfile/:id",mentorAuthValidation,viewMentorProfile)
mentorRouter.put("/modifierProfile/:id",mentorAuthValidation,updateMentorProfile)
mentorRouter.get("/sessionsHistory/:id",mentorAuthValidation,mentorSessionHistory)
