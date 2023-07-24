import  Express  from "express";

import {viewAprenantProfile,updateApprenantProfile,aprenantSessionHistory,
    getAvailableMentors,requestMentoring,getSpecificMentor,filtreMentorsByDomain,
    filtreMentorsByPrice,filtreMentorsByRating,rateMentor, filtreMentorsByskill, filtreMentors, updateAprenantImage }
     from "../controllers/aprenantController.js"
     
import {aprenantAutorisation,} from "../middelwares/jwt.js"

export const aprenantRouter = Express.Router()


aprenantRouter.get("/viewAprenantProfile/:id",aprenantAutorisation,viewAprenantProfile)
aprenantRouter.put("/updateApprenantProfile/:id",aprenantAutorisation,updateApprenantProfile)
aprenantRouter.put("/updateApprenantProfileImage/:id",aprenantAutorisation,updateAprenantImage)
aprenantRouter.get("/aprenantSessionHistory/:id",aprenantAutorisation,aprenantSessionHistory)
aprenantRouter.get("/getAvailableMentors",getAvailableMentors)
aprenantRouter.post("/requestMentoring",aprenantAutorisation,requestMentoring)
aprenantRouter.get("/getSpecificMentor/:id",aprenantAutorisation,getSpecificMentor)
aprenantRouter.get("/filtreMentorsByDomain",aprenantAutorisation,filtreMentorsByDomain)
aprenantRouter.get("/filtreMentorsBySkills",aprenantAutorisation,filtreMentorsByskill)
aprenantRouter.get("/filtreMentorsByPrice",aprenantAutorisation,filtreMentorsByPrice)
aprenantRouter.get("/filtreMentors",filtreMentors)
aprenantRouter.get("/filtreMentorsByRating",aprenantAutorisation,filtreMentorsByRating)
aprenantRouter.post("/rateMentor",aprenantAutorisation,rateMentor)
