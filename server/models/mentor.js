import mongoose from "mongoose";

const Schema = mongoose.Schema;

const mentorSchema = new Schema(
  {
    userInherit: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    domaine: {
        type: [String],
        required: true,
    },
    experience :{
        type: String,
        required : true,
    },
    disponibilites : {
        type : String,
        required : true,
    },
    description : {
        type : String,
       
    },
    prixHoraire : {
        type : String,
        required : true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
      },
      companyName: {
        type: String,
      
      },
      skills : {
        type : [String],
        required : true,
      },
      isAvailable: {
        type: Boolean,
        default: true,
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

export const Mentor = mongoose.model("mentor", mentorSchema);
