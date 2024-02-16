import Section from "@/app/ui/Home/Section";

export default function Location() {
  return (
    <Section className="h-[400px] md:h-[570px] lg:h-[670px] flex-col gap-0 overflow-scroll no-scrollbar relative rounded-[18px]">
      <div className="bg-[url('/map.png')] bg-bottom w-full h-[60%]"/>

      <div className="bg-[url('/map2.png')] bg-top w-full h-[60%]"/>

      <div className="absolute bottom-10 left-0 right-0 mx-auto w-[80%] h-[60%] md:h-[170px] rounded-[18px] py-[10px] lg:py-[40px] px-[10px] lg:px-[80px] bg-whiteBg-default flex flex-col items-start justify-center gap-[16px]">
        <h2 className="text-[25px] md:text-[31px] font-[800] text-darkFontBlue-default text-left">
          Where are we located?
        </h2>

        <p className="text-[14px] text-lightFont-default">
          We mostly deal with caretakers or landlords of lodges located in the vicinity of Nnamdi Azikiwe University, Awka, Anambra State.
        </p>
      </div>
    </Section>
  )
}