import mongoose from "mongoose";

export interface ITransaction {
    userId: string,
    packageId: number,
    amount:  number,
    reference?: string
    status?: string
}

const transactionSchema = new mongoose.Schema<ITransaction>({
    userId: {
        type: String,
        trim: true,
        required: true
    },
    packageId: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true,
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

const Transaction = mongoose.models.Transaction || mongoose.model('Transaction', transactionSchema);

export default Transaction