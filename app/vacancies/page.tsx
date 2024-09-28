"use client";

import Pagination from "@/app/ui/vacancies/Pagination";
import LodgesDisplay from "@/app/ui/vacancies/LodgesDisplay";
import { VacanciesProvider } from "../context/vacancies-context";

export default function Page() {
  return (
    <VacanciesProvider>
      <section className="w-full h-fit lg:h-[857px] flex flex-col lg:flex-row justify-start lg:justify-between items-center lg:items-start mt-[80px]">
        <div className="w-full lg:w-[1030px] h-fit lg:h-full flex flex-col justify-start items-center gap-[30px] px-[10px] lg:pr-[20px] lg:pl-[30px] mb-[20px]">
          <div className="w-full h-[79px] flex flex-col items-start justify between">
            <h2 className="text-[30px] lg:text-[35px] font-[800] text-left text-darkFont-default">
              Top
            </h2>

            <p className="text-[14px] text-lightFont-default">
              Top vacancies UNIZIK, Awka, Anambra State
            </p>
          </div>

          <LodgesDisplay />
        </div>
        <Pagination />
      </section>
    </VacanciesProvider>
  );
}
