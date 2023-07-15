import  Express  from "express";

import {viewAprenantProfile,updateApprenantProfile,aprenantSessionHistory,
    getAvailableMentors,requestMentoring,getSpecificMentor,searchMentorsByDomain,
    searchMentorsByPrice,searchMentorsByRating,rateMentor }
     from "../controllers/aprenantController.js"
     
import {aprenantAutorisation,} from "../middelwares/jwt.js"

export const aprenantRouter = Express.Router()


aprenantRouter.get("/viewAprenantProfile/:id",aprenantAutorisation,viewAprenantProfile)
aprenantRouter.patch("/updateApprenantProfile/:id",aprenantAutorisation,updateApprenantProfile)
aprenantRouter.get("/aprenantSessionHistory/:id",aprenantAutorisation,aprenantSessionHistory)
aprenantRouter.get("/getAvailableMentors",getAvailableMentors)
aprenantRouter.post("/requestMentoring",aprenantAutorisation,requestMentoring)
aprenantRouter.get("/getSpecificMentor/:id",aprenantAutorisation,getSpecificMentor)
aprenantRouter.get("/searchMentorsByDomain",aprenantAutorisation,searchMentorsByDomain)
aprenantRouter.get("/searchMentorsByPrice",aprenantAutorisation,searchMentorsByPrice)
aprenantRouter.get("/searchMentorsByRating",aprenantAutorisation,searchMentorsByRating)
aprenantRouter.post("/rateMentor",aprenantAutorisation,rateMentor)
