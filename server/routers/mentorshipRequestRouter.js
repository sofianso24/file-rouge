import  Express  from "express";

import {acceptMentorshipRequest,rejectMentorshipRequest,
    getMentorshipRequests,
    getMentorshipRequestsApreant} 
    from "../controllers/mentorshipRequestController.js"

import {mentorAutorisation} from "../middelwares/jwt.js"   

export const mentorshipRequestRouter  = Express.Router()

mentorshipRequestRouter.post("/acceptMentorship",mentorAutorisation,acceptMentorshipRequest)
mentorshipRequestRouter.put("/rejectMentorship",mentorAutorisation,rejectMentorshipRequest)
mentorshipRequestRouter.get("/getMentorship/:id",mentorAutorisation,getMentorshipRequests)
mentorshipRequestRouter.get("/getMentorshipAprenant/:id",mentorAutorisation,getMentorshipRequestsApreant)
