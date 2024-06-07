import mongoose from "mongoose";

export interface IVacancy {
    lodgeName: string
    lodgeAddress: string
    initialRent: number
    subsequentRent: number
    sanitationBill: number
    lightBill: number
    interests: []
    images: {
        balconyImageURL?: string
        bathroomImageURL?: string
        buildingImageURL?: string
        kitchenImageURL?: string
        roomImageURL?: string
    }
    hasSecurity: 'yes' | 'no'
    hasRunningWater: 'yes' | 'no'
    hasBackupPower: 'yes' | 'no'
}

const vacancySchema = new mongoose.Schema<IVacancy>({
    lodgeName: {
        type: String,
        trim: true,
        required: true,
        minlength: 2,
        maxlength: 100,
    },
    lodgeAddress: {
        type: String,
        trim: true,
        required: true,
        minlength: 2,
    },
    initialRent: {
        type: Number,
        required: true,
        min: 10000,
    },
    subsequentRent: {
        type: Number,
        required: true,
        min: 10000,
    },
    sanitationBill: Number,
    lightBill: Number,
    interests: Array,
    images: {
        balconyImageURL: String,
        bathroomImageURL: String,
        buildingImageURL: String,
        kitchenImageURL: String,
        roomImageURL: String,
    },
    hasSecurity: {
        type: String,
        enum: ['yes', 'no'],
        required: true
    },
    hasRunningWater: {
        type: String,
        enum: ['yes', 'no'],
        required: true
    },
    hasBackupPower: {
        type: String,
        enum: ['yes', 'no'],
        required: true
    }
}, {timestamps: true})

const Vacancy = mongoose.models.Vacancy || mongoose.model('Vacancy', vacancySchema);

export default Vacancy