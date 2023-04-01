import mongoose from "mongoose";


const Schema = mongoose.Schema;

const sessionFeedbackSchema = new Schema(
  {
    session : {
        type: Schema.Types.ObjectId,
        ref : 'session'
    },
    aprenant : {
        type: Schema.Types.ObjectId,
        ref : 'aprenant'
    },
    rating: {
        type: Number, 
        required: true,
        min: 1, 
        max: 5
      },
      comment: {
        type: String,
        required: false
      },
      dateCreation : {
        type : Date,
        required : true
      },
  },
  { timestamps: true }
);



export const SessionFeedbaack = mongoose.model("sessionFeedback", sessionFeedbackSchema);
