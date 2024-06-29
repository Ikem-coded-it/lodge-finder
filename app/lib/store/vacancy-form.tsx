import { IoWaterOutline } from "react-icons/io5";
import { BsLightningCharge } from "react-icons/bs";
import { GrUserPolice } from "react-icons/gr";
import { FaRegLightbulb } from "react-icons/fa6";
import { CiTrash } from "react-icons/ci";
import { Vacancy } from "../definitions/vacancy";

export const initialVacancyValues = {
  lodgeName: "",
  lodgeAddress: "",
  initialRent: "",
  subsequentRent: "",
  images: {
    buildingImageURL: "",
    roomImageURL: "",
    balconyImageURL: "",
    bathroomImageURL: "",
    kitchenImageURL: "",
  },
  hasRunningWater: "",
  hasBackupPower: "",
  hasSecurity: "",
  lightBill: "",
  sanitationBill: "",
  additionalInfo: "",
  interests: [],
} as unknown as Vacancy;

export const vacancyFormOptions = () => {
  return [
    {
      key: "hasRunningWater",
      label: "RUNNING WATER",
      icon: <IoWaterOutline size="18px" color="#000000" />,
      type: "select",
    },
    {
      key: "hasBackupPower",
      label: "BACKUP POWER",
      icon: <BsLightningCharge size="18px" color="#000000" />,
      type: "select",
    },
    {
      key: "hasSecurity",
      label: "SECURITY",
      icon: <GrUserPolice size="18px" color="#000000" />,
      type: "select",
    },
    {
      key: "lightBill",
      label: "LIGHT BILL",
      icon: <FaRegLightbulb size="18px" color="#000000" />,
      type: "input",
    },
    {
      key: "sanitationBill",
      label: "SANITATION BILL",
      icon: <CiTrash size="18px" color="#000000" />,
      type: "input",
    },
  ];
};

export const vacancyImagesUpload = [
  { label: "Building picture here", key: "buildingImageURL" },
  { label: "Room picture here", key: "roomImageURL" },
  { label: "Bathroom picture here", key: "bathroomImageURL" },
  { label: "Kitchen picture here", key: "kitchenImageURL" },
  { label: "Balcony picture here", key: "balconyImageURL" },
];
