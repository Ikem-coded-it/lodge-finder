/* eslint-disable react/no-unescaped-entities */
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import Image from "@/app/ui/Image";

export default function Card() {
  return (
    <div className="flex justify-start items-center min-w-[95vw] h-fit lg:h-[362px]">
      <div className="flex flex-col justify-start items-start flex-1 h-fit lg:h-[362px] p-[60px] gap-[50px]">

        <p className="text-[14px] text-lightFont-default text-left relative px-[40px] py-[20px]">
          <div className="h-fit w-[30px] flex items-start absolute top-0 left-0">
            <BiSolidQuoteAltLeft size="30px" color="#003B5C" />
          </div>

          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          
          <div className="h-fit w-[30px] flex items-end absolute bottom-0 right-0">
            <BiSolidQuoteAltRight size="30px" color="#003B5C" />
          </div>
        </p>

        <div className="flex flex-col items-start justify-center gap-[12px] pl-[30px]">
          <h2 className="text-[19px] text-darkFont-default font-[800]">
            Paul Emeribe
          </h2>

          <p className="text-[14px] text-lightFont-default">
            Student, Housing Agent.
          </p>
        </div>
      </div>

      <Image
      width={400}
      height={362}
      src="/person.png"
      alt="person smiling"
      className="hidden md:block h-[323px] w-[400px] bg-[#EEEEEE]"
      />
    </div>
  )
}