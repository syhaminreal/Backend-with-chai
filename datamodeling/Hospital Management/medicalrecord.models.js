import mongoose from "mongoose";

// Define the schema for MedicalRecord
const medicalRecordSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient", // Assuming there's a Patient model
        required: true
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor", // Assuming there's a Doctor model
        required: true
    },
    diagnosis: {
        type: String,
        required: true
    },
    treatment: {
        type: String,
        required: true
    },
    notes: {
        type: String
    }
}, { timestamps: true });

// Export the model
export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);
