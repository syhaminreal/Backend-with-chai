import mongoose from "mongoose";

// Define the schema for Hospital
const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    website: {
        type: String
    },
    departments: [{
        type: String
    }],
    bedsAvailable: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

// Export the model
export const Hospital = mongoose.model("Hospital", hospitalSchema);
