import mongoose from "mongoose";
// import localTime from 'mongoose-localtime';

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
        type: Date,
        required: true,
      },
      endTime: {
        type: Date,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
      rating:{
        type:Number,
        min : 1,
        max: 5
      },
      hasRated:{
        type: Boolean,
        default:false
      },
  },
  { timestamps: true }
);

// sessionSchema.plugin(localTime);

export const Session = mongoose.model("session", sessionSchema);
