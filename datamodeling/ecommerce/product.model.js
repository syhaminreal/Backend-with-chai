import mongoose from "mongoose";
import { Category } from "./category.model"; // Assuming you have a Category model defined

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    stock: {
      type: Number, // Ensure this has a type
      default: 0,
    },
    category: {
      // Changed to lowercase to match JavaScript naming conventions
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Use colon instead of equals
    },
  },
  { timestamps: true } // Changed 'timestamp' to 'timestamps' for automatic timestamping
);

// Export the Product model
export const Product = mongoose.model("Product", productSchema);
