import  Express  from "express";

import {viewMentorProfile,updateMentorProfile,
    mentorSessionHistory} from "../controllers/mentorController.js"
import {mentorAuthValidation} from "../middelwares/jwt.js"

export const mentorRouter = Express.Router()


mentorRouter.get("/viewProfile",mentorAuthValidation,viewMentorProfile)
mentorRouter.put("/modifierProfile",mentorAuthValidation,updateMentorProfile)
mentorRouter.get("/sessionsHistory",mentorAuthValidation,mentorSessionHistory)
