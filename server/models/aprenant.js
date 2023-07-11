import mongoose from "mongoose";
import { User } from "./user.js";

const Schema = mongoose.Schema;

const aprenantSchema = new Schema(
  {
    // userInherit: {
    //   type: Schema.Types.ObjectId,
    //   ref: "user",
    // },
    domaineInteret: {
        type: [String],
        // required: true,
    },
    niveauEtude :{
        type: String,
        // required : true,
    },
    disponibilites : {
        type : String,
        // required : true,
    },
    description : {
        type : String,
    },
    but : {
        type : String, 
    },
    progres: {
        type: Number,
        min: 0,
        max: 100,
      },
      image: {
        type: Buffer 
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
