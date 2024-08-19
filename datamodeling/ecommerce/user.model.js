import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      // Removed 'lowercase: true' for security reasons
    },
  },
  { timestamps: true } // Corrected to 'timestamps'
);

export const User = mongoose.model("User", userSchema);
