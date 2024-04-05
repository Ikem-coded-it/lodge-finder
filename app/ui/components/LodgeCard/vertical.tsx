import { CiLocationOn } from "react-icons/ci";
import ExtraInfo from "@/app/ui/components/LodgeCard/ExtraInfo";
import VacancyDetails from "@/app/ui/components/LodgeCard/VacancyDetails";
import Link from "next/link";
import Button from "@/app/ui/components/Button";
import SliderFrame from "@/app/ui/components/SliderFrame"
import image1 from "@/public/lodges/lodge1.png";
import image2 from "@/public/lodges/lodge2.png";
import image3 from "@/public/lodges/lodge3.png";
import DisplaySlider from "../Slider-display";

const pics = [
  {url: image1, type: "placeholder"},
  {url: image2, type: "placeholder"},
  {url: image3, type: "placeholder"},
]

// Used in the home page "Hot" section
export default function VerticalLodgeCard() {
  return (
    <div className="min-w-[390px] md:min-w-[405px] max-w-[390px] rounded-[8px] p-[20px] gap-[20px] bg-lightGreyBg-default lg:hover:scale-[1.01] transition-all duration-[.2s] ease-out">
      <address className="font-[500] text-[11px] text-darkFont-default flex not-italic mb-[10px]">
        <CiLocationOn size="14px" color="#000000"/>
        7474+MP4, YAHOO STREET, IFITE, IFITE-AWKA, ANAMBRA STATE, NIGERIA.
      </address>

      <h3 className="font-[500] text-[19px] text-darkFont-default w-full text-left mb-[25px]">
        Nwajiofor Lodge
      </h3>

      {/* Extra Info Slider */}
      <SliderFrame>
        <ExtraInfo/>
      </SliderFrame>

      {/* Lodge Building Picture */}
      <DisplaySlider
      type="display"
      data={pics}
      />

      <VacancyDetails/>

      {/* Rent */}
      <SliderFrame className="w-[310px] md:w-full mb-0 py-2">
        <div className="w-fit h-fit flex justify-between items-center gap-[80px]">
          <Link href="/">
            <Button
            text="Interested"
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

            <div className="w-[120px] h-[39px] flex flex-col justify-start items-start gap-[8px]">
              <h4 className="text-[10px] text-lightFont-default">
                SUBSEQUENT RENT
              </h4>
              <p className="text-[16px] font-[800] text-darkFont-default">
                N130000
                <span className="font-[500] text-[9px] text-lightFont-default">
                  /per year
                </span>
              </p>
            </div>
          </div>
        </div>
      </SliderFrame>
    </div>
  )
}