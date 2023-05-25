import  Express  from "express";

import {acceptMentorshipRequest,rejectMentorshipRequest,
    getMentorshipRequests,
    getMentorshipRequestsApreant} 
    from "../controllers/mentorshipRequestController.js"

import {mentorAuthValidation} from "../middelwares/jwt.js"   

export const mentorshipRequestRouter  = Express.Router()

mentorshipRequestRouter.post("/acceptMentorship",mentorAuthValidation,acceptMentorshipRequest)
mentorshipRequestRouter.put("/rejectMentorship",mentorAuthValidation,rejectMentorshipRequest)
mentorshipRequestRouter.get("/getMentorship/:id",mentorAuthValidation,getMentorshipRequests)
mentorshipRequestRouter.get("/getMentorshipAprenant/:id",mentorAuthValidation,getMentorshipRequestsApreant)
