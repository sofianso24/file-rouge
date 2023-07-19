import  Express  from "express";

import {viewMentorProfile,updateMentorProfile,
    mentorSessionHistory,
    aprenantProgress,
    getSpecificAprentice} from "../controllers/mentorController.js"
import {mentorAutorisation} from "../middelwares/jwt.js"


export const mentorRouter = Express.Router()


mentorRouter.get("/viewProfile/:id",viewMentorProfile)
mentorRouter.put("/modifierProfile/:id",mentorAutorisation,updateMentorProfile)
mentorRouter.get("/getAprentice/:id",mentorAutorisation,getSpecificAprentice)
mentorRouter.get("/sessionsHistory/:id",mentorAutorisation,mentorSessionHistory)
mentorRouter.post("/aprenantProgress",mentorAutorisation,aprenantProgress)
