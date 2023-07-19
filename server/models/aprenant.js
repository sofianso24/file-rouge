import mongoose from "mongoose";
import { User } from "./user.js";

const Schema = mongoose.Schema;

const aprenantSchema = new Schema(
  {
    // userInherit: {
    //   type: Schema.Types.ObjectId,
    //   ref: "user",
    // },
    domainInteret: {
        type: [String],
        // required: true,
    },
    studyLevel :{
        type: String,
        // required : true,
    },
    availability : {
        type : String,
        // required : true,
    },
    about : {
        type : String,
    },
    goal : {
        type : String, 
    },
    progress: {
        type: Number,
        min: 0,
        max: 100,
      },
      image: {
        type: String 
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

export const Aprenant = User.discriminator("aprenant", aprenantSchema);
