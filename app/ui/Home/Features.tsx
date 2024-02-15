import Section from "@/app/ui/Home/Section";
import Link from "next/link";
import Button from "@/app/ui/Button";
import { ReactNode } from "react";
import { IoWaterOutline } from "react-icons/io5";
import { BsLightningCharge } from "react-icons/bs";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { GrUserPolice } from "react-icons/gr";
import { GiBroom } from "react-icons/gi";
import { GiThreeFriends } from "react-icons/gi";
import { MdOutlineBedroomParent } from "react-icons/md";
import { TfiMore } from "react-icons/tfi";

const features = [
  {icon: <IoPartlySunnyOutline color="#003B5C" size="40px"/>, text: "Condusive Environment"},
  {icon: <GrUserPolice color="#003B5C" size="40px"/>, text: "Security"},
  {icon: <GiBroom color="#003B5C" size="40px"/>, text: "Clean Area"},
  {icon: <GiThreeFriends color="#003B5C" size="40px"/>, text: "Friendly Neighbors"},
  {icon: <BsLightningCharge color="#003B5C" size="40px"/>, text: "Backup Power"},
  {icon: <IoWaterOutline color="#003B5C" size="40px"/>, text: "Running Water"},
  {icon: <MdOutlineBedroomParent color="#003B5C" size="40px"/>, text: "Spacious Rooms & Balconies"},
  {icon: <TfiMore color="#003B5C" size="40px"/>, text: "Lots more."},
]

export default function Features() {
  return (
    <Section className="flex-col md:flex-row">
      <div className="max-w-full md:max-w-[370px] lg:max-w-[506px] min-w-full md:min-w-[370px] lg:min-w-[506px] flex flex-col gap-[30px] md:gap-[50px] justify-start items-start mb-[20px] md:mb-0">
        <h2 className="font-[800] text-[30px] md:text-[35px] text-darkFont-default m-0 w-full text-left">
          We provide you with the best lodges that match your taste. 
        </h2>

        <p className="text-[14px] text-lightFont-default text-left">
          We prioritize our users experience and satisfaction. Are you an agent with lodges that students would love? Sign up now as a caretaker to get the publicity you need. 
        </p>

        <Link href="/auth/signup">
          <Button
          text="Sign up Now"
          bg
          className="w-[113px] h-[45px]"
          />
        </Link>
      </div>

      <div className="gap-[24px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-[5px]">
        {
          features.map(feat => {
            return (
              <FeatureBox key={feat.text} icon={feat.icon} text={feat.text}/>
            )
          })
        }
      </div>
    </Section>
  )
}

function FeatureBox({
  icon,
  text
} : {
  icon: ReactNode,
  text: string
}) {
  return (
    <div className="h-[150px] flex flex-col justify-center items-center gap-[20px] border-[1px] border-[#E8E8E8] hover:shadow-[1px_1px_30px_#001D10] transition-all duration-[.2s.] ease-in rounded-[5px]">
      {icon}
      <p className="text-[14px] text-darkFontBlue-default text-center">
        {text}
      </p>
    </div>
  )
}