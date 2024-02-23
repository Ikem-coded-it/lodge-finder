/* eslint-disable react/no-unescaped-entities */
'use client'

import Section from "@/app/ui/Home/Section";
import { RxCaretLeft } from "react-icons/rx";
import { RxCaretRight } from "react-icons/rx";
import Card from "@/app/ui/Home/Testimonial/Card";
import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Testimonial() {
  const [translateValue, setTranslateValue] = useState(0);
  const sliderRef : any = useRef();
  const pathname = usePathname();

  useEffect(() => {
    sliderRef.current.style.transform = `translateX(${translateValue}vw)`;
  }, [translateValue])

  function rightButtonScroll() {
    setTranslateValue(prev => {
      // replace 3 with testimonial length
      const max = (3 - 1) * 95;
      if (prev === -max) return 0
      return prev - 95
    })
  }

  function leftButtonScroll() {
    setTranslateValue(prev => {
      if (prev >= 0) return 0
      return prev + 95
    })
  }

  return (
    <Section className={clsx(
      {
        "mt-[290px]": pathname === "/"
      },
      "md:mt-[25px] relative overflow-hidden no-scrollbar"
    )}>
      <div ref={sliderRef} className="h-fit w-full flex justify-start items-center transition-all duration-[.3s] ease-out">
        <Card/>
        <Card/>
        <Card/>
      </div>

      {/* Scroll buttons */}
      <div className="h-full w-[80px] flex justify-center items-center absolute left-0 top-0 z-10">
        <button
        className="w-[40px] h-[40px] border-0 border-none bg-whiteBg-default flex justify-center items-center p-0 rounded-[50%]"
        onClick={leftButtonScroll}
        >
          <RxCaretLeft size="20px" color="#003B5C"/>
        </button>
      </div>

      <div className="h-full w-[80px] flex justify-center items-center absolute right-0 top-0 z-10">
        <button
        className="w-[40px] h-[40px] border-0 border-none bg-whiteBg-default flex justify-center items-center p-0 rounded-[50%]"
        onClick={rightButtonScroll}
        >
          <RxCaretRight size="20px" color="#003B5C"/>
        </button>
      </div>
    </Section>
  )
}