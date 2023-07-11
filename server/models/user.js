import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userRole: {
      type: String,
      enum: ["admin", "aprenant", "mentor"],
      required: true,
    },
    isActive:{
      type: Boolean,
      default : false
    },
    firstName : {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("user", userSchema);
