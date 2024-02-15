import Section from "@/app/ui/Home/Section";
import Image from "@/app/ui/Image";
import Link from "next/link";
import Button from "@/app/ui/Button";

export default function OurStory() {
  return(
    <Section className="flex-col md:flex-row rounded-[16px] h-[498px]">
      <div className="flex-1 relative h-full w-full">
        <Image
        src="/housekey.png"
        alt="depiction of a pair of keys next to a toy house which hints at what the website is about"
        width={300}
        height={498}
        className="h-[300px] md:h-full w-full md:rounded-l-[16px] rounded-t-[16px] md:rounded-t-none"
        />

        <Image
        src="/logo.png"
        alt="Lodge finder logo"
        width={180}
        height={100}
        className="h-[100px] w-[180px] absolute bottom-0 right-0 z-10"
        />
      </div>

      <div className="flex-1 bg-lightBlue-default md:rounded-r-[16px] h-[600px] md:h-full p-[40px] lg:p-[50px] flex flex-col items-start justify-start gap-[30px] md:gap-[50px]">

        <h2 className="text-[30px] md:text-[35px] text-darkFont-default font-[800] w-full text-left">
          Our Story
        </h2>

        <p className="text-[14px] text-lightFont-default">
          Lodge Finder was founded out of pity and quest to solve the frustration and pain that  students face when looking for lodges. Lodge Finder wants to bring this problem to an end by allowing students to have ample time to focus on their studies while we handle/take care of their housing challenges.
          At no cost to students.
        </p>

        <p className="text-[14px] text-lightFont-default">
          Love what we do and want to support us to keep this service running? We would appreciate that. No amount is too little for us.
        </p>

        <Link href="/">
          <Button
          border
          text="Support us"
          className="w-[104px] h-[45px]"
          />
        </Link>
      </div>
    </Section>
  )
}