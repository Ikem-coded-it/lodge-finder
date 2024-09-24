import { CiLocationOn } from "react-icons/ci";
import ExtraInfo from "@/app/ui/components/LodgeCard/ExtraInfo";
import VacancyDetails from "@/app/ui/components/LodgeCard/VacancyDetails";
import Link from "next/link";
import Button from "@/app/ui/components/Button";
import SliderFrame from "@/app/ui/components/SliderFrame";
import DisplaySlider from "../Slider-display";
import { Vacancy } from "@/app/lib/definitions/vacancy";

// Used in the home page "Hot" section
export default function VerticalLodgeCard({ vacancy }: { vacancy: Vacancy }) {
  const pics = [
    { url: vacancy?.images?.buildingImageURL, type: "image" },
    { url: vacancy?.images?.roomImageURL, type: "image" },
    { url: vacancy?.images?.balconyImageURL, type: "image" },
    { url: vacancy?.images?.bathroomImageURL, type: "image" },
    { url: vacancy?.images?.kitchenImageURL, type: "image" },
  ].filter((pic) => pic.url); // Filter out any undefined URLs
  console.log("additionalInfo", vacancy);
  const vacancyDetails = {
    caretakerName: vacancy.caretakerName,
    phoneNumber: vacancy.phoneNumber,
    whatsappNumber: vacancy.whatsAppNumber,
    ...(vacancy.additionalInfo && { additionalInfo: vacancy.additionalInfo }),
  };

  return (
    <div className="min-w-[390px] md:min-w-[405px] max-w-[390px] rounded-[8px] p-[20px] gap-[20px] bg-lightGreyBg-default lg:hover:scale-[1.01] transition-all duration-[.2s] ease-out">
      <address className="font-[500] text-[11px] text-darkFont-default flex not-italic mb-[10px]">
        <CiLocationOn size="14px" color="#000000" />
        {vacancy.lodgeAddress}
      </address>

      <h3 className="font-[500] text-[19px] text-darkFont-default w-full text-left mb-[25px]">
        {vacancy.lodgeName}
      </h3>

      {/* Extra Info Slider */}
      <SliderFrame>
        <ExtraInfo
          hasRunningWater={vacancy?.hasRunningWater as "yes" | "no"}
          hasSecurity={vacancy?.hasSecurity as "yes" | "no"}
          hasBackupPower={vacancy?.hasBackupPower as "yes" | "no"}
          sanitationBill={vacancy?.sanitationBill as number}
          lightBill={vacancy?.lightBill as number}
        />
      </SliderFrame>

      {/* Lodge Building Picture */}
      <DisplaySlider type="display" data={pics} />

      <VacancyDetails vacancyDetails={vacancyDetails as any} />

      {/* Rent */}
      <SliderFrame className="w-[310px] md:w-full mb-0 py-2">
        <div className="w-fit h-fit flex justify-between items-center gap-[80px]">
          {/* <Link href={`/vacancy/${vacancy.id}`}>
            <Button text="Interested" bg className="w-[89px] h-[41px]" />
          </Link> */}

          <div className="flex justify-start items-center gap-[20px]">
            <div className="w-[82px] h-[39px] flex flex-col justify-start items-start gap-[8px]">
              <h4 className="text-[10px] text-lightFont-default">
                INITIAL RENT
              </h4>
              <p className="text-[16px] font-[800] text-darkFont-default">
                N{vacancy.initialRent}
              </p>
            </div>

            <div className="w-[120px] h-[39px] flex flex-col justify-start items-start gap-[8px]">
              <h4 className="text-[10px] text-lightFont-default">
                SUBSEQUENT RENT
              </h4>
              <p className="text-[16px] font-[800] text-darkFont-default">
                N{vacancy.subsequentRent}
                <span className="font-[500] text-[9px] text-lightFont-default">
                  /per year
                </span>
              </p>
            </div>
          </div>
        </div>
      </SliderFrame>
    </div>
  );
}
