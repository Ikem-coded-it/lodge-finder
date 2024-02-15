import Section from "@/app/ui/Home/Section";
import Button from "@/app/ui/Button";
import Link from "next/link";
import VerticalLodgeCard from "@/app/ui/LodgeCard";

export default function Hot() {
  return (
    <Section>
      <header className="w-full flex justify-between items-end mb-[20px]">
        <div className="flex flex-col items-start justify-end gap-[20px]">
          <h2 className="text-[30px] md:text-[35px] font-[800] text-darkFont-default m-0">
            Hot
          </h2>
          <p className="text-[12px] md:text-[14px] text-lightFont-default">
            Explore these lodges that are in high demand.
          </p>
        </div>

        <Link href="/vacancies">
          <Button
          border
          text="View All"
          className="text-lightBlueFont-default w-[75px] md:w-[85px] h-[30px] md:h-[35px] mb-[15px] md:mb-0"
          />
        </Link>
      </header>

      <div className="w-full h-fit overflow-scroll no-scrollbar flex justify-start items-start">
        <div className="flex justify-start items-start gap-[26px] w-fit">
          <VerticalLodgeCard/>
          <VerticalLodgeCard/>
          <VerticalLodgeCard/>
        </div>
      </div>
    </Section>
  )
}