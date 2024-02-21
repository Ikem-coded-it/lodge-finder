import HorizontzlLodgeCard from "@/app/ui/components/LodgeCard/horizontal"

export default function LodgesDisplay() {
  return (
    <div className="flex flex-col justify-start gap-[20px] lg:overflow-y-scroll min-h-[748px] max-h-[748px] w-full border-2 border-blue-400">
      <HorizontzlLodgeCard />
      <HorizontzlLodgeCard />
      <HorizontzlLodgeCard />
      <HorizontzlLodgeCard />
    </div>
  )
}