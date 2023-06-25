import mongoose from "mongoose"

const Schema = mongoose.Schema

const messageSchema = new Schema (
   {
    sender : {
        type: String,
        enum: ['mentor', 'apprenant'],
        required: true
    },
    reciver : {
        type:String,
        enum: ['mentor', 'apprenant'],
        required: true
    },
    message:{
        type: String,
        required : true
    }, 
   },
   {timestamps : true} 
)

export const Message = mongoose.model("message",messageSchema)
