"use client"

import Image from "@/app/ui/components/Image";
import image1 from "@/public/lodges/lodge1.png";
import image2 from "@/public/lodges/lodge2.png";
import image3 from "@/public/lodges/lodge3.png";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import clsx from "clsx";
import cn from "@/app/lib/utils/cn";
import { useState } from "react";

const lodgePics = [
  image1, image2, image3
]

export default function LodgeImageSlider({
  className
}:{
  className?: string
}) {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  function increaseSlide() {
    setActiveImageIndex(prev => (prev + 1) % lodgePics.length)
  }

  function decreaseSlide() {
    setActiveImageIndex(prev => {
      return prev === 0 ? lodgePics.length - 1 : prev - 1
    })
  }

  const mergedClasses = cn(
    "min-w-full h-[350px] mb-[20px] flex flex-col items-center justify-start group",
    className
  )

  return(
    <div className={mergedClasses}>
      <div className="w-full h-[320px] relative">
        {
          lodgePics.map((pic, index) => {
            return (
              <Image
              key={index}
              src={pic}
              alt="a depiction of one of the hot lodges in ifite"
              height={330}
              width={300}
              className={clsx(
                {
                  "opacity-100": index === activeImageIndex,
                  "opacity-0": index !== activeImageIndex,
                },
                "min-w-full h-full rounded-[10px] absolute transition-opacity duration-[.2s] ease-out"
              )}
              />
            )
          })
        }
      </div>

      <div className="w-fit h-[30px] flex justify-center items-center lg:opacity-0 lg:pointer-events-none lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto">
        <button
        onClick={decreaseSlide}
        className="h-full w-[29px] flex justify-center items-center"
        >
          <RxCaretLeft size="30px"/>
        </button>

        <div className="flex justify-center items-center h-full gap-[10px] lg:gap-[5px]">
          {
            lodgePics.map((pic, index) => {
              return(
                <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={clsx(
                  {
                    "bg-[#000000]": index === activeImageIndex,
                    "bg-[#949393]": index !== activeImageIndex,
                  },
                  "h-[15px] lg:h-[10px] w-[15px] lg:w-[10px] border-[1px] rounded-[50%] transition-all duration-[.2s] ease-out"
                )}
                />
              )
            })
          }
        </div>

        <button
        onClick={increaseSlide}
        className="h-full w-[29px] flex justify-center items-center"
        >
          <RxCaretRight size="30px"/>
        </button>
      </div>
    </div>
  )
}