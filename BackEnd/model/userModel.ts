import { Document, model, Schema } from "mongoose";

interface iUser {
  fullName: string;
  email: string;
  password: string;
  verify: boolean;
}

interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>(
  {
    fullName: {
      type: String,
    },

    email: {
      type: String,
      unique: true,
    },

    password: {
      type: String,
    },

    verify: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default model<iUserData>("users", userModel);
