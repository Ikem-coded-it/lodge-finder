"use client";

import { ReactNode, useEffect } from "react";
import { fetchAllCaretakers } from "../lib/data/caretaker";

export default function Page({ children }: { children: ReactNode }) {
  useEffect(() => {
    const fetchCaretaker = async () => {
      try {
        const res = await fetchAllCaretakers();

        if (res instanceof Error) {
          console.log("dashboard page error", res.message);
        }
      } catch (error: any) {
        console.log("dasboard catch error", error.message);
      }
    };

    fetchCaretaker();
  }),
    [];

  return <></>;
}
