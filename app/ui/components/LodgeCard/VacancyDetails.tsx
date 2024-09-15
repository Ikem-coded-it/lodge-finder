"use client";

import { HiOutlineUser } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { useState, useEffect } from "react";
import Button from "@/app/ui/components/Button";

interface VacancyDetailsProps {
  vacancyDetails: {
    caretakerName: string;
    phoneNumber: string;
    whatsappNumber: string;
    additionalInfo: string;
  };
}

export default function VacancyDetails({
  vacancyDetails,
}: VacancyDetailsProps) {
  const [additionalInfoMaxLength, setAdditionalInfoMaxLength] =
    useState<number>(150);
  const [formattedAdditionalInfoText, setFormattedAdditionalInfoText] =
    useState<string>(vacancyDetails?.additionalInfo);

  // expand additional info by increasing or decreasing max length
  const toggleExpandAdditionalInfo = () => {
    additionalInfoMaxLength !== 150
      ? setAdditionalInfoMaxLength(150)
      : setAdditionalInfoMaxLength(vacancyDetails?.additionalInfo.length);
  };

  useEffect(() => {
    setFormattedAdditionalInfoText((): string => {
      return vacancyDetails?.additionalInfo.length > additionalInfoMaxLength
        ? vacancyDetails?.additionalInfo.slice(0, additionalInfoMaxLength) +
            "..."
        : vacancyDetails?.additionalInfo;
    });
  }, [additionalInfoMaxLength, vacancyDetails?.additionalInfo]);

  return (
    <div className="w-full h-fit">
      <div className="grid grid-cols-2">
        <div className="w-[150px] h-[53px] flex items-start justify-start gap-[10px]">
          <HiOutlineUser size="18px" color="#555555" />

          <div className="flex flex-col justify-start items-start">
            <h4 className="text-[13px] font-[500] text-darkFont-default">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Caretaker's name
            </h4>
            <p className="text-[11px] font-[500] text-lightFont-default">
              {vacancyDetails?.caretakerName}
            </p>
          </div>
        </div>

        <div className="w-[150px] h-[53px] flex items-start justify-start gap-[10px]">
          <BsTelephone size="18px" color="#555555" />

          <div className="flex flex-col justify-start items-start">
            <h4 className="text-[13px] font-[500] text-darkFont-default">
              Call number
            </h4>
            <p className="text-[11px] font-[500] text-lightFont-default">
              {vacancyDetails?.phoneNumber}
            </p>
          </div>
        </div>

        <div className="w-[150px] h-[53px] flex items-start justify-start gap-[10px]">
          <FaWhatsapp size="18px" color="#555555" />

          <div className="flex flex-col justify-start items-start">
            <h4 className="text-[13px] font-[500] text-darkFont-default">
              Whatsapp
            </h4>
            <p className="text-[11px] font-[500] text-lightFont-default">
              {vacancyDetails?.whatsappNumber}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-[111px] flex items-start justify-start gap-[10px]">
        <CiCircleInfo size="18px" color="#555555" />

        <div className="flex flex-col justify-start items-start w-[90%]">
          <h4 className="text-[13px] font-[500] text-darkFont-default">
            Additional info
          </h4>
          <p className="text-[11px] font-[500] text-lightFont-default">
            {formattedAdditionalInfoText}
          </p>
          <div className="w-full h-fit flex justify-end">
            {vacancyDetails?.additionalInfo.length > 150 &&
            additionalInfoMaxLength === 150 ? (
              <Button
                text="See more"
                onClick={toggleExpandAdditionalInfo}
                className="text-[10px] lg:text-[9px] lg:font-[800] w-[70px] h-[20px]"
              />
            ) : vacancyDetails?.additionalInfo.length > 150 &&
              additionalInfoMaxLength > 150 ? (
              <Button
                text="Close"
                onClick={toggleExpandAdditionalInfo}
                className="text-[10px] lg:text-[9px] lg:font-[800] w-[70px] h-[20px]"
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
