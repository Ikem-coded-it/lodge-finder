import HorizontalLodgeCard from "@/app/ui/components/LodgeCard/horizontal"

export default function LodgesDisplay() {
  return (
    <div className="flex flex-col justify-start gap-[20px] lg:overflow-y-scroll min-h-fit lg:min-h-[748px] lg:max-h-[748px] w-full">
      <HorizontalLodgeCard />
      <HorizontalLodgeCard />
      <HorizontalLodgeCard />
      <HorizontalLodgeCard />
    </div>
  )
}