import { HiOutlineUser } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";

const additionalInfo = "We take pride in creating opportunities for students and individuals in Nigeria. We are a Housing Agency and Consulting Firm in partnership with leading real estate firms and organizations, overseeing multiple leading housing projects across Nigeria. Grand Deluxe Homes & Properties is here to provide you with the latest and best lodging and housing in the market. We operate within the commercial, retail and residential property segments, as well as provide advisory services. Our success is built on our customer experience base which is valued as one of the largest in the Nigeria. We also aim at creating awareness, finding solution to housing Issues across Nigeria. Call the number above today to book or schedule a tour with me.";

export default function VacancyDetails() {
  return (
    <div className="w-full h-fit">
      <div className="grid grid-cols-2">
        <div className="w-[150px] h-[53px] flex items-start justify-start gap-[10px]">
          <HiOutlineUser size="18px" color="#555555"/>

          <div className="flex flex-col justify-start items-start">
            <h4 className="text-[13px] font-[500] text-darkFont-default">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Caretaker's name
            </h4>
            <p className="text-[11px] font-[500] text-lightFont-default">
              Paul Emeribe
            </p>
          </div>
        </div>

        <div className="w-[150px] h-[53px] flex items-start justify-start gap-[10px]">
          <BsTelephone size="18px" color="#555555"/>

          <div className="flex flex-col justify-start items-start">
            <h4 className="text-[13px] font-[500] text-darkFont-default">
              Call number
            </h4>
            <p className="text-[11px] font-[500] text-lightFont-default">
              +2347845968879
            </p>
          </div>
        </div>

        <div className="w-[150px] h-[53px] flex items-start justify-start gap-[10px]">
          <FaWhatsapp size="18px" color="#555555"/>

          <div className="flex flex-col justify-start items-start">
            <h4 className="text-[13px] font-[500] text-darkFont-default">
              Whatsapp
            </h4>
            <p className="text-[11px] font-[500] text-lightFont-default">
              +2347845968879
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-[111px] flex items-start justify-start gap-[10px]">
        <CiCircleInfo size="18px" color="#555555"/>

        <div className="flex flex-col justify-start items-start w-[90%]">
          <h4 className="text-[13px] font-[500] text-darkFont-default">
            Additional info
          </h4>
          <p className="text-[11px] font-[500] text-lightFont-default">
            {
              additionalInfo.length > 150 ?
              additionalInfo.slice(0, 150) + "..." :
              additionalInfo
            }
          </p>
        </div>
      </div>
    </div>
  )
}