import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      max: 60,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    city: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    Task: Array,
    role: {
      type: String,
      enum: ["user", "admin", "manager"],
      default: "admin",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
