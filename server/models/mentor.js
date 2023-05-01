import mongoose from "mongoose";

const Schema = mongoose.Schema;

const mentorSchema = new Schema(
  {
    userInherit: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    domaine: {
        type: String,
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
        required : true,
    },
    prixHoraire : {
        type : String,
        required : true
    },
    rating: {
        type: Number,
        min: 0,
        max: 100,
      },
      companyName: {
        type: String,
        required: true,
      },
      skills : {
        type : [String],
        required : true,
      },
  },
  { timestamps: true }
);

export const Mentor = mongoose.model("mentor", mentorSchema);
