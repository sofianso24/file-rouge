import mongoose from "mongoose";


const Schema = mongoose.Schema;

const sessionSchema = new Schema(
  {
    mentor : {
        type: Schema.Types.ObjectId,
        ref : 'mentor'
    },
    aprenant : {
        type: Schema.Types.ObjectId,
        ref : 'aprenant'
    },
    date : {
        type : Date,
        required : true
    },
    startTime: {
        type: String,
        required: true,
      },
      endTime: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
      rating:{
        type:Number,
        default : 0 ,
        min : 0,
        max: 5
      },
      note :{
         type : Number,
         min :0,
         max:10
      },
      hasRated:{
        type: Boolean,
        default:false
      },
  },
  { timestamps: true }
);



export const Session = mongoose.model("session", sessionSchema);
