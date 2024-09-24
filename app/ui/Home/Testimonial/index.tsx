/* eslint-disable react/no-unescaped-entities */
"use client";

import Section from "@/app/ui/Home/Section";
import { RxCaretLeft } from "react-icons/rx";
import { RxCaretRight } from "react-icons/rx";
import Card from "@/app/ui/Home/Testimonial/Card";
import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Testimonial() {
  const [translateValue, setTranslateValue] = useState(0);
  const sliderRef: any = useRef();
  const pathname = usePathname();

  useEffect(() => {
    sliderRef.current.style.transform = `translateX(${translateValue}vw)`;
  }, [translateValue]);

  function rightButtonScroll() {
    setTranslateValue((prev) => {
      // replace 3 with testimonial length
      const max = (3 - 1) * 95;
      if (prev === -max) return 0;
      return prev - 95;
    });
  }

  function leftButtonScroll() {
    setTranslateValue((prev) => {
      if (prev >= 0) return 0;
      return prev + 95;
    });
  }

  return (
    <Section
      className={clsx(
        {
          "mt-[290px]": pathname === "/",
        },
        "md:mt-[25px] relative overflow-hidden no-scrollbar"
      )}
    >
      <div
        ref={sliderRef}
        className="h-fit w-full flex justify-start items-center transition-all duration-[.3s] ease-out"
      >
        <Card
          text="Are you tired of having to walk around to find a lodge? We have got you covered. Choose from a variety of options, call the caretaker, check out the space!"
          imgUrl="https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D"
          customerName="LodgeFinder"
          customerTitle="Mgt"
        />
        <Card
          text="This plaform is just what you need as a new student looking for a place to stay."
          imgUrl="https://images.unsplash.com/photo-1517442847530-9bfced8783cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdXNlJTIwa2V5c3xlbnwwfHwwfHx8MA%3D%3D"
          customerName="Chioma"
          customerTitle="Student"
        />
        <Card
          text="No stress. Focus your energy on other things "
          imgUrl="https://plus.unsplash.com/premium_photo-1679856789424-f4dc3c855845?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdXNlJTIwa2V5c3xlbnwwfHwwfHx8MA%3D%3D"
          customerName="Paul Okeke"
          customerTitle="Caretaker"
        />
      </div>

      {/* Scroll buttons */}
      <div className="h-full w-[80px] flex justify-center items-center absolute left-0 top-0 z-10">
        <button
          className="w-[40px] h-[40px] border-0 border-none bg-whiteBg-default flex justify-center items-center p-0 rounded-[50%]"
          onClick={leftButtonScroll}
        >
          <RxCaretLeft size="20px" color="#003B5C" />
        </button>
      </div>

      <div className="h-full w-[80px] flex justify-center items-center absolute right-0 top-0 z-10">
        <button
          className="w-[40px] h-[40px] border-0 border-none bg-whiteBg-default flex justify-center items-center p-0 rounded-[50%]"
          onClick={rightButtonScroll}
        >
          <RxCaretRight size="20px" color="#003B5C" />
        </button>
      </div>
    </Section>
  );
}
