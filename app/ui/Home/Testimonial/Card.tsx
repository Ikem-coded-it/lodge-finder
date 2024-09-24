/* eslint-disable react/no-unescaped-entities */
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import Image from "@/app/ui/components/Image";

export default function Card({
  text,
  imgUrl,
  customerName,
  customerTitle,
}: {
  text: string;
  imgUrl: string;
  customerName: string;
  customerTitle: string;
}) {
  return (
    <div className="flex justify-start items-center min-w-[95vw] h-fit lg:h-[362px]">
      <div className="flex flex-col justify-start items-start flex-1 h-fit lg:h-[362px] p-[60px] gap-[50px]">
        <p className="text-[14px] text-lightFont-default text-left relative px-[40px] py-[20px]">
          <span className="h-fit w-[30px] flex items-start absolute top-0 left-0">
            <BiSolidQuoteAltLeft size="30px" color="#003B5C" />
          </span>
          {text}
          <span className="h-fit w-[30px] flex items-end absolute bottom-0 right-0">
            <BiSolidQuoteAltRight size="30px" color="#003B5C" />
          </span>
        </p>

        <div className="flex flex-col items-start justify-center gap-[12px] pl-[30px]">
          <h2 className="text-[19px] text-darkFont-default font-[800]">
            {customerName}
          </h2>

          <p className="text-[14px] text-lightFont-default">{customerTitle}</p>
        </div>
      </div>

      <Image
        width={400}
        height={362}
        src={imgUrl}
        alt="person smiling"
        className="hidden md:block h-[323px] w-[400px] bg-[#EEEEEE] object-cover"
      />
    </div>
  );
}
