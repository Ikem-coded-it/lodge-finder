"use client";

import { CiLocationOn } from "react-icons/ci";
import ExtraInfo from "@/app/ui/components/LodgeCard/ExtraInfo";
import VacancyDetails from "@/app/ui/components/LodgeCard/VacancyDetails";
import Link from "next/link";
import Button from "@/app/ui/components/Button";
import SliderFrame from "@/app/ui/components/SliderFrame";
import cn from "@/app/lib/utils/cn";
import { FaMinus } from "react-icons/fa";
import DisplaySlider from "../Slider-display";
import { ILodgeImages, IVacancy } from "@/app/lib/models/vacancy";
import { toast } from "react-toastify";
import $http from "@/app/lib/services/$http";
import { Dispatch, SetStateAction } from "react";

// Used in the vacancies page
export default function HorizontalLodgeCard({
  className,
  type = "vacancies_page",
  data,
  setVacancies,
}: {
  className?: string;
  type?: "dashboard" | "vacancies_page";
  data?: IVacancy;
  setVacancies: Dispatch<SetStateAction<IVacancy[]>>;
}) {
  const mergedClasses = cn(
    "min-w-full md:min-w-[405px] lg:max-w-[990px] rounded-[8px] p-[20px] gap-[20px] bg-lightGreyBg-default relative",
    className
  );

  const pics = [];

  const handleDelete = async () => {
    try {
      const res = await $http.delete(`/api/vacancy/${data?._id ?? 1}`);

      if (res?.status === 200) toast.success("Vacancy deleted successfully");

      setVacancies((prev) => {
        return prev.filter((x) => x._id !== data?._id);
      });
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  for (const key in data?.images) {
    pics.push({
      url: data?.images[key as keyof ILodgeImages],
      type: key,
    });
  }

  const vacancyDetails = {
    caretakerName: data?.caretakerName || "",
    phoneNumber: data?.phoneNumber || "",
    whatsappNumber: data?.whatsAppNumber || "",
    additionalInfo: data?.additionalInfo || "",
  };

  return (
    <div className={mergedClasses}>
      <address className="font-[500] text-[11px] text-darkFont-default flex not-italic mb-[10px]">
        <CiLocationOn size="14px" color="#000000" />
        {/* 7474+MP4, YAHOO STREET, IFITE, IFITE-AWKA, ANAMBRA STATE, NIGERIA.
         */}
        {data?.lodgeAddress}
      </address>

      <h3 className="font-[500] text-[19px] text-darkFont-default w-full text-left mb-[25px]">
        {/* Nwajiofor Lodge */}
        {data?.lodgeName}
      </h3>

      {/* Extra Info Slider */}
      <SliderFrame>
        <ExtraInfo
          hasBackupPower={data?.hasBackupPower}
          hasRunningWater={data?.hasRunningWater}
          hasSecurity={data?.hasSecurity}
          sanitationBill={data?.sanitationBill}
          lightBill={data?.lightBill}
        />
      </SliderFrame>

      <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-start gap-[15px] mb-[20px]">
        {/* Lodge Picture slider */}
        <DisplaySlider
          type="display"
          data={pics}
          className="min-w-full max-w-[340px] md:min-w-[500px] lg:min-w-[400px] lg:max-w-[400px] h-[340px] lg:h-[380px]"
        />

        <div className="flex flex-col justify-start items-start flex-1 h-[288px]">
          <VacancyDetails vacancyDetails={vacancyDetails} />

          {/* Rent */}
          <SliderFrame
            className={cn("w-[300px] md:w-full mb-0 py-2", {
              "mb-10 lg:mb-0": type == "dashboard",
            })}
          >
            <div className="w-fit h-fit flex justify-between items-center gap-[80px]">
              {/* <Link href="/">
                <Button text="Interested" bg className="w-[89px] h-[41px]" />
              </Link> */}

              <div className="flex justify-start items-center gap-[20px]">
                <div className="w-[82px] h-[39px] flex flex-col justify-start items-start gap-[8px]">
                  <h4 className="text-[10px] text-lightFont-default">
                    INITIAL RENT
                  </h4>
                  <p className="text-[16px] font-[800] text-darkFont-default">
                    {data?.initialRent}
                  </p>
                </div>

                <div className="w-[120px] h-[39px] flex flex-col justify-start items-start gap-[8px]">
                  <h4 className="text-[10px] text-lightFont-default">
                    SUBSEQUENT RENT
                  </h4>
                  <p className="text-[16px] font-[800] text-darkFont-default">
                    {data?.subsequentRent}
                    <span className="font-[500] text-[9px] text-lightFont-default">
                      /per year
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </SliderFrame>
        </div>
      </div>

      <button
        className={cn(
          "flex h-16 w-16 justify-center items-center gap-3 text-[#f87171] absolute bottom-0 right-6",
          { hidden: type == "vacancies_page" }
        )}
        type="button"
        onClick={handleDelete}
      >
        <div className="h-fit w-fit p-1 bg-lightGreyBg-default rounded-[50%]">
          <FaMinus size="18px" color="#f87171" />
        </div>
        Remove
      </button>
    </div>
  );
}
