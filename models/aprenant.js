import mongoose from "mongoose";

const Schema = mongoose.Schema;

const aprenantSchema = new Schema(
  {
    userInherit: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    domaineInteret: {
        type: [String],
        required: true,
    },
    niveauEtude :{
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
    but : {
        type : [string],
        required : true
    },
    progres: {
        type: Number,
        min: 0,
        max: 100,
      },
  },
  { timestamps: true }
);

export const Aprenant = mongoose.model("aprenant", aprenantSchema);