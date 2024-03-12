// All type definitions go here

export type Caretaker = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  callNumber: string;
  imageURL: string;
  whatsappNumber: string;
}

export type Lodge = {
  id: string;
  caretakerId: string;
  name: string;
  imageURL: string;
  state: string | undefined;
  LGA: string | undefined;
  town: string | undefined;
  address: string | undefined;
  postCode: number | undefined;
  nearestJunction: "miracle junction" | "yahoo junction" | "next level junction" | "other";
}

export type LodgeFee = {
  id: string;
  vacancyId: string;
  type: "sanitation fee" | "light bill" | "security fee";
  period: "weekly" | "monthly" | "yearly";
  amount: number;
}

export type VacancyInterest = {
  name: string;
  message: string;
}

export type Vacancy = {
  id: string;
  lodgeName: string,
  lodgeAddress: string,
  initialRent: number;
  subsequentRent: number;
  images: string[],
  hasRunningWater: boolean;
  hasBackupPower: boolean;
  hasSecurity: boolean;
  additionalInfo: string;
  interests: VacancyInterest[];
  fees: LodgeFee[];
}