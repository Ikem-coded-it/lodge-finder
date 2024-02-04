// All type definitions go here

export type Caretaker = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  callNumber: string;
  whatsappNumber: string;
  managedLodges: string[];
}

export type Lodge = {
  id: string;
  caretakerId: string;
  name: string;
  imageURL: string;
  location: string;
  junction: string;
}

export type LodgeFee = {
  id: string;
  lodgeId: string;
  type: "sanitation" | "light";
  period: "weekly" | "monthly" | "yearly";
  amount: number;
}

export type Vacancy = {
  id: string;
  lodgeId: string;
  initialRent: number;
  subsequentRent: number;
  bedSpaceImageURL: string;
  kitchenSpaceImageURL: string;
  balconyImageURL: string;
  hasRunningWater: boolean;
  hasBackupPower: boolean;
}