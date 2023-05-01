import mongoose from "mongoose";

import { Admin } from "../models/admin.js"
import async from "hbs/lib/async";
import { Aprenant } from "../models/aprenant.js";

// apprenant crud : 

// create apprenant

const createApprenant = async (req,res)=>{
      try {
         const apprenant = new Aprenant({
            admin : req.cookies["userId"].userId,
            
         })
          

      } catch (error) {
        
      }
}