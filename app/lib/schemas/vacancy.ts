import * as yup from 'yup';

const VacancySchema = yup.object().shape({
  lodgeName: yup.string()
    .min(3, "too short")
    .required('Lodge name is required'),
  lodgeAddress: yup.string()
    .min(3, "too short")
    .required('Lodge address is required'),
  initialRent: yup.number()
    .min(10000, "too small")
    .max(2000000, "too big")
    .required('*Required'),
  subsequentRent: yup.number()
    .min(10000, "too small")
    .max(2000000, "too big")
    .required('*Required'),
  images: yup.object().shape({
    buildingImageURL: yup.string()
        .min(3)
        .required('Building image is required'),
    roomImageURL: yup.string()
        .min(3)
        .required('Room image is required'),
    balconyImageURL: yup.string()
        .min(3)
        .required('Balcony image is required'),
    bathroomImageURL: yup.string()
        .min(3)
        .required('Bathroom image is required'),
    kitchenImageURL: yup.string()
        .min(3)
        .required('Kitchen image is required'),
  }),
  hasRunningWater: yup.string()
    .min(2)
    .max(3)
    .required('Required'),
  hasBackupPower: yup.string()
    .min(2)
    .max(3)
    .required('Required'),
  hasSecurity: yup.string()
    .min(2)
    .max(3)
    .required('Required'),
  lightBill: yup.number().nullable(),
  sanitationBill: yup.number().nullable(),
  additionalInfo: yup.string().nullable()
});

export default VacancySchema;

