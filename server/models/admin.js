import mongoose from "mongoose";
import { User } from "./user.js";

const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    // userInherit: {
    //   type: Schema.Types.ObjectId,
    //   ref: "user",
    // },
  },
  { timestamps: true }
);

export const Admin = User.discriminator("admin", adminSchema);
