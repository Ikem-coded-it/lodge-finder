"use client";

import { useEffect, useState } from "react";
import Section from "@/app/ui/Home/Section";
import Button from "@/app/ui/components/Button";
import Link from "next/link";
import VerticalLodgeCard from "@/app/ui/components/LodgeCard/vertical";
import { VerticalLodgeCardSkeleton } from "@/app/ui/components/Skeletons/lodgecard";
import $http from "@/app/lib/services/$http";

export default function Hot() {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const result = await $http.get("/api/vacancy");
        setVacancies(result?.data?.data);
      } catch (error) {
        console.error("Error fetching vacancies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVacancies();
  }, []);

  return (
    <>
      {vacancies.length ? (
        <Section className="flex-col">
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
              {loading ? (
                <>
                  <VerticalLodgeCardSkeleton />
                  <VerticalLodgeCardSkeleton />
                  <VerticalLodgeCardSkeleton />
                </>
              ) : (
                vacancies
                  .slice(0, 3)
                  .map((vacancy, index) => (
                    <VerticalLodgeCard key={index} vacancy={vacancy} />
                  ))
              )}
            </div>
          </div>
        </Section>
      ) : null}
    </>
  );
}
