import mongoose from "mongoose";

export interface ILodgeImages {
  balconyImageURL?: string;
  bathroomImageURL?: string;
  buildingImageURL?: string;
  kitchenImageURL?: string;
  roomImageURL?: string;
}
export interface IVacancy {
  _id?: string;
  caretaker_sub: string;
  caretakerName: string;
  phoneNumber: string;
  whatsAppNumber: string;
  lodgeName: string;
  lodgeAddress: string;
  additionalInfo: string;
  initialRent: number;
  subsequentRent: number;
  sanitationBill: number;
  lightBill: number;
  interests: [];
  images: ILodgeImages;
  hasSecurity: "yes" | "no";
  hasRunningWater: "yes" | "no";
  hasBackupPower: "yes" | "no";
}

const vacancySchema = new mongoose.Schema<IVacancy>(
  {
    caretaker_sub: {
      type: String,
      trim: true,
      required: true,
    },
    caretakerName: {
      type: String,
      trim: true,
      required: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
      required: true,
    },
    whatsAppNumber: {
      type: String,
      trim: true,
      required: true,
    },

    additionalInfo: {
      type: String,
      trim: true,
      required: false,
    },

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
      enum: ["yes", "no"],
      required: true,
    },
    hasRunningWater: {
      type: String,
      enum: ["yes", "no"],
      required: true,
    },
    hasBackupPower: {
      type: String,
      enum: ["yes", "no"],
      required: true,
    },
  },
  { timestamps: true }
);

const Vacancy =
  mongoose.models.Vacancy || mongoose.model("Vacancy", vacancySchema);

export default Vacancy;
