import mongoose from "mongoose";

// Define the User schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Must be at least 8 characters"],
    },
  },
  { timestamps: true }
);

// Export the User model
export const User = mongoose.model("User", userSchema);
