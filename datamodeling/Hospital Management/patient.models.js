import mongoose from "mongoose";

// Define the schema for Patient
const patientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
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
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: String
    },
    medicalHistory: {
        type: [String], // Array of strings for listing past medical conditions
    }
}, { timestamps: true });

// Export the model
export const Patient = mongoose.model("Patient", patientSchema);
