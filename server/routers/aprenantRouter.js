import  Express  from "express";

import {viewAprenantProfile} from "../controllers/aprenantController.js"
import {aprenantAuthValidation} from "../middelwares/jwt.js"

export const aprenantRouter = Express.Router()


aprenantRouter.get("/viewAprenantProfile",aprenantAuthValidation,viewAprenantProfile)
