"use client";

import $http from "@/app/lib/services/$http";
import HorizontalLodgeCard from "@/app/ui/components/LodgeCard/horizontal";
import { useEffect, useState } from "react";

export default function LodgesDisplay() {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await $http.get("/api/vacancy");

      setVacancies(res?.data?.data);
      setLoading(false);
    })();

    console.log("dashboard vaccancies");
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <h1>Loading....</h1>
        </div>
      ) : (
        <div className="flex flex-col justify-start gap-[20px] lg:overflow-y-scroll min-h-fit lg:min-h-[748px] lg:max-h-[748px] w-full">
          {vacancies.map((vacancy) => {
            return <HorizontalLodgeCard data={vacancy} />;
          })}
        </div>
      )}
    </>
  );
}
