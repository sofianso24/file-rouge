import  Express  from "express";

import {viewAprenantProfile,updateApprenantProfile,aprenantSessionHistory,
    getAvailableMentors,requestMentoring,getSpecificMentor,searchMentorsByDomain,
    searchMentorsByPrice,searchMentorsByRating,rateMentor }
     from "../controllers/aprenantController.js"
     
import {aprenantAuthValidation,} from "../middelwares/jwt.js"

export const aprenantRouter = Express.Router()


aprenantRouter.get("/viewAprenantProfile/:id",aprenantAuthValidation,viewAprenantProfile)
aprenantRouter.put("/updateApprenantProfile/:id",aprenantAuthValidation,updateApprenantProfile)
aprenantRouter.get("/aprenantSessionHistory/:id",aprenantAuthValidation,aprenantSessionHistory)
aprenantRouter.get("/getAvailableMentors",aprenantAuthValidation,getAvailableMentors)
aprenantRouter.post("/requestMentoring",aprenantAuthValidation,requestMentoring)
aprenantRouter.get("/getSpecificMentor",aprenantAuthValidation,getSpecificMentor)
aprenantRouter.get("/searchMentorsByDomain",aprenantAuthValidation,searchMentorsByDomain)
aprenantRouter.get("/searchMentorsByPrice",aprenantAuthValidation,searchMentorsByPrice)
aprenantRouter.get("/searchMentorsByRating",aprenantAuthValidation,searchMentorsByRating)
aprenantRouter.post("/rateMentor",aprenantAuthValidation,rateMentor)
