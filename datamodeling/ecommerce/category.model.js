import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Corrected to 'timestamps'
);

export const Category = mongoose.model("Category", categorySchema);
