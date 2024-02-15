import { CiLocationOn } from "react-icons/ci";
import ExtraInfo from "@/app/ui/LodgeCard/ExtraInfo";
import Image from "next/image";
import VacancyDetails from "@/app/ui/LodgeCard/VacancyDetails";
import Link from "next/link";
import Button from "@/app/ui/Button";

// Used in the home page "Hot" section
export default function VerticalLodgeCard() {
  return (
    <div className="min-w-[390px] max-w-[390px] rounded-[8px] p-[20px] gap-[20px] bg-lightGreyBg-default lg:hover:scale-[1.02] transition-all duration-[.2s] ease-out">
      <address className="font-[500] text-[11px] text-darkFont-default flex not-italic mb-[10px]">
        <CiLocationOn size="14px" color="#000000"/>
        7474+MP4, YAHOO STREET, IFITE, IFITE-AWKA, ANAMBRA STATE, NIGERIA.
      </address>

      <h3 className="font-[500] text-[19px] text-darkFont-default w-full text-left mb-[25px]">
        Nwajiofor Lodge
      </h3>

      {/* Extra Info Slider */}
      <div className="w-full h-[fit-content] overflow-scroll flex justify-start items-center no-scrollbar mb-[20px]">
        <ExtraInfo/>
      </div>

      {/* Lodge Building Picture */}
      <Image
      alt={`Depiction of Nwajiofor Lodge`}
      src="/lodge.png"
      width={350}
      height={340}
      className="min-w-full h-[340px] rounded-[10px] mb-[20px]"
      />

      <VacancyDetails/>

      {/* Rent */}
      <div className="w-full h-fit flex justify-between items-center">
        <Link href="/">
          <Button
          text="See more"
          bg
          className="w-[89px] h-[41px]"
          />
        </Link>

        <div className="flex justify-start items-center gap-[20px]">
          <div className="w-[82px] h-[39px] flex flex-col justify-start items-start gap-[8px]">
            <h4 className="text-[10px] text-lightFont-default">
              INITIAL RENT
            </h4>
            <p className="text-[16px] font-[800] text-darkFont-default">
              N150000
            </p>
          </div>

          <div className="w-[100px] h-[39px] flex flex-col justify-start items-start gap-[8px]">
            <h4 className="text-[10px] text-lightFont-default">
              SUBSEQUENT RENT
            </h4>
            <p className="text-[16px] font-[800] text-darkFont-default">
              N130000
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}