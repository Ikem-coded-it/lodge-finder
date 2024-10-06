import mongoose from "mongoose";

export interface IDonation {
    fullName: string,
    email: string,
    amount:  number,
    testimonial?: string
    reference?: string
    status?: string
}

const donationSchema = new mongoose.Schema<IDonation>({
    fullName: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    testimonial: {
        type: String,
        trim: true,
    },
    reference: {
        type: String,
        trim: true,
    },
    status: {
        type: String,
        trim: true,
        default: "pending"
    }
}, {timestamps: true})

const Donation = mongoose.models.Donation || mongoose.model('Donation', donationSchema);

export default Donation