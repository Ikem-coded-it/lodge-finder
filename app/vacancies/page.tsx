import Pagination from "@/app/ui/vacancies/Pagination";
import LodgesDisplay from "@/app/ui/vacancies/LodgesDisplay";

export default function Page() {
  return (
    <section className="w-full h-[857px] flex justify-between items-start border-2 border-red-500">
      <div className="w-[990px] h-full flex flex-col justify-start items-center gap-[30px] pl-[30px] border-2 border-green-500">
        <div className="w-full h-[79px] flex flex-col items-start justify between">
          <h2 className="text-[35px] font-[800] text-left text-darkFont-default">
            Top
          </h2>

          <p className="text-[14px] text-lightFont-default">
            Top vacancies in Ifite, Awka, Anambra State
          </p>
        </div>

        <LodgesDisplay/>
      </div>
      <Pagination/>
    </section>
  )
}