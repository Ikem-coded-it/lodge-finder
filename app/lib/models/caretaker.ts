import mongoose from "mongoose";

interface ICaretaker {
    reference: string
    username: string
    firstName: string
    lastName: string
    email: string
    callNumber: string
    whatsappNumber: string
    imageURL: string
    credits: number
}

const caretakerSchema = new mongoose.Schema<ICaretaker>({
    reference: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    username: {
        type: String,
        trim: true,
        maxlength: 50
    },
    firstName: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    callNumber: {
        type: String,
        trim: true,
        required: true,
        minlength: 14,
        maxLength: 14,
    },
    whatsappNumber: {
        type: String,
        trim: true,
        required: true,
        minlength: 14,
        maxLength: 14,
    },
    imageURL: {
        type: String,
        trim: true
    },
    credits: {
        type: Number,
        default: 0
    }
}, {timestamps: true})

const Caretaker = mongoose.models.Caretaker || mongoose.model('Caretaker', caretakerSchema);

export default Caretaker