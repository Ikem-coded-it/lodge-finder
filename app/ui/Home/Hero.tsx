import Container from "@/app/ui/components/Container";
import { openSans } from "@/app/ui/font";
import Image from "@/app/ui/components/Image";
import Button from "@/app/ui/components/Button";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineToday } from "react-icons/md";
import { MdMeetingRoom } from "react-icons/md";
import clsx from "clsx";

const floaterData = [
  {icon: <IoLocationSharp size="20px"/>, title: "Location", info: "Anambra state"},
  {icon: <LuCalendarDays size="20px"/>, title: "Availability", info: "24 hours"},
  {icon: <MdOutlineToday size="20px"/>, title: "Days", info: "Mon. - Sat."},
  {icon: <MdMeetingRoom size="20px"/>, title: "Rooms for", info: "UNIZIK Students"}
]

export default function Hero() {
  return <header className="relative w-[95vw] min-h-[646px] max-h-[fit-content] mt-[20px] flex justify-center rounded-t-[30px] overflow-hidden">

    <Container className="flex-1 bg-lightBlue-default pt-[90px] px-[60px] flex flex-col justify-start items-center gap-[50px] rounded-t-[30px] lg:rounded-t-none">
      <h1 className={`text-[59px] font-extrabold font-['Open-Sans'] text-darkFont-default ${openSans.className}`}>
        Lodge hunting stress-free.
      </h1>

      <p className="text-lightFont-default text-[17px]">
        With Lodge Finder, finding the best lodge as a student is no longer difficult.
      </p>

      <Container className="flex flex-col md:flex-row justify-start items-center gap-[6px] mb-[20px] lg:mb-0">
        <Link href="/vacancies">
          <Button
          text="View vacancies"
          border
          className="gap-[10px] w-[189px] h-[48px]"/>
        </Link>

        <Link href="/auth/signup">
          <Button 
          text="Sign up as a caretaker?"
          bg
          className="gap-[10px] w-[189px] h-[48px]"
          />
        </Link>
      </Container>
    </Container>

    <Image
    alt="depiction of a pair of keys next to a toy house which hints at what the website is about"
    src="/housekey.png"
    width={610}
    height={646}
    className="hidden lg:block h-[646px] flex-1"
    />

    <div className="hidden md:flex justify-center items-center w-[812px] h-[73px] py-[4px] pr-[24px] pl-[4px] bg-whiteBg-default gap-[20px] rounded-[50px] absolute bottom-[50px] left-0 right-0 my-0 mx-auto shadow-[0_0_10px_#FAFAFA]">
      {
        floaterData.map((data, index) => {
          return (
            <div key={data.title} className={clsx(
              {
                'border-r-[1px] border-[#E8E8E8]': index !== 3,
                'ml-[20px]': index === 0
              },
              "flex justify-start items-start h-full flex-1 gap-[10px] pt-[10px] pb-[10px]"
            )}>
              {data.icon}
              <div className="flex flex-col items-start h-full gap-[5px]">
                <p className="text-[15px] text-darkFontBlue-default">{data.title}</p>
                <p className="text-[12px] text-lightFont-default">{data.info}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  </header>
}