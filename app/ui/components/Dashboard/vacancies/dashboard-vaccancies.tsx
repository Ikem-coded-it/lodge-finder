"use client";

import $http from "@/app/lib/services/$http";
import { useEffect } from "react";

export default function DashboardVaccancies() {
  useEffect(() => {
    (async () => {
      const res = await $http.get("/api/vacancy");

      console.log("res", res.data.data);
    })();

    console.log("dashboard vaccancies");
  }, []);

  return <h1>DASHBOARD VACCANCIES</h1>;
}
