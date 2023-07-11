import mongoose from "mongoose";
import { User } from "./user.js";

const Schema = mongoose.Schema;

const mentorSchema = new Schema(
  {
    userInherit: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    domain: {
        type: [String],
        
    },
    experience :{
        type: String,
       
    },
    disponibility : {
        type : String,
       
    },
    about : {
        type : String,
       
    },
    services: [
      {
        type : String,
      }
    ],
   
    rating: {
        type: Number,
        min: 0,
        max: 5,
      },
      company: {
        type: String,
      
      },
      skills : {
        type : [String],
        
      },
      isAvailable: {
        type: Boolean,
        default: true,
      },
      localisation: {
        type: String,
        
      },
      responseTime:{
           type:String 
      },
      image: {
        type: String 
      },
      price:{
        type : String
      },
      sessions: [
        {
          type: Schema.Types.ObjectId,
          ref: "session",
        },
      ],
      messages: [
        {
          type: Schema.Types.ObjectId,
          ref: "message",
        },
      ],
      mentorshipsRequests : [
        {
          type : Schema.Types.ObjectId,
          ref : "mentorshipRequest"
        }
      ]
  },
  { timestamps: true }
);

export const Mentor = User.discriminator("mentor", mentorSchema);
