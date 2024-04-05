export type VacancyInterest = {
    name: string;
    message: string;
  }
  
  export type Vacancy = {
    id?: string;
    lodgeName: string,
    lodgeAddress: string,
    initialRent: number | null;
    subsequentRent: number | null;
    images: {
      buildingImageURL: string
      roomImageURL: string
      balconyImageURL: string
      bathroomImageURL: string
      kitchenImageURL: string
    },
    hasRunningWater: 'yes' | 'no' | null;
    hasBackupPower: 'yes' | 'no' | null;
    hasSecurity: 'yes' | 'no' | null;
    lightBill?: number  | null;
    sanitationBill?: number | null;
    additionalInfo?: string | null;
    interests?: VacancyInterest[];
  }