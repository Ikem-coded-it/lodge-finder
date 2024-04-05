"use client"

import Image from "@/app/ui/components/Image";
import image1 from "@/public/lodges/lodge1.png";
import image2 from "@/public/lodges/lodge2.png";
import image3 from "@/public/lodges/lodge3.png";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import clsx from "clsx";
import cn from "@/app/lib/utils/cn";
import { useState } from "react";
import Button from "../../Button";
import { SlPicture } from "react-icons/sl";
import ChooseImageModal from "@/app/ui/components/Dashboard/vacancies/choose-image-modal";


const data = [
  {url: null, type: "Room picture"},
  {url:image1, type: "Bathroom picture" },
  {url: image3, type: "Building picture"},
  {url: null, type: "Balcony picture"}
]

export default function ImageInputSlider({
  className
}:{
  className?: string
}) {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);

  function increaseSlide() {
    setActiveImageIndex(prev => (prev + 1) % data.length)
  }

  function decreaseSlide() {
    setActiveImageIndex(prev => {
      return prev === 0 ? data.length - 1 : prev - 1
    })
  }

  const mergedClasses = cn(
    "min-w-full h-[400px] mb-[20px] flex flex-col items-center justify-start gap-3",
    className
  )

  return(
    <div className={mergedClasses}>
      <div className="w-full h-[320px] relative">
        {
          data.map(({ url, type }, index) => {
            if (url)
            return (
              <Image
              key={index}
              src={url}
              alt={type}
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
            else
            return (
              <DefaultImageDisplay className={clsx(
                {
                  "opacity-100": index === activeImageIndex,
                  "opacity-0": index !== activeImageIndex,
                }
              )}
              text={type + " here"}
              />
            )
          })
        }
      </div>

      <div className="w-fit h-[30px] flex justify-center items-center">
        <button
        type="button"
        onClick={decreaseSlide}
        className="h-full w-[29px] flex justify-center items-center"
        >
          <RxCaretLeft size="30px"/>
        </button>

        <div className="flex justify-center items-center h-full gap-[10px] lg:gap-[5px]">
          {
            data.map((_, index) => {
              return(
                <button
                type="button"
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
        type="button"
        onClick={increaseSlide}
        className="h-full w-[29px] flex justify-center items-center"
        >
          <RxCaretRight size="30px"/>
        </button>
      </div>

      <Button
      type="button"
      border
      text="choose image"
      className="w-[100px] h-fit"
      onClick={() => setIsImageModalOpen(true)}
      />

      <ChooseImageModal
      isOpen={isImageModalOpen}
      closeModal={() => setIsImageModalOpen(false)}
      />
    </div>
  )
}

function DefaultImageDisplay({
  text,
  className
}: {
  text: string,
  className: string,
}) {
    const mergedClasses = cn(
      "flex flex-col gap-2 justify-center items-center min-w-full h-full rounded-[10px] absolute transition-opacity duration-[.2s] ease-out bg-lightGreyBg-default",
      className
    )
    return (
        <div className={mergedClasses}>
            <SlPicture size="25px" color="#86198f"/>
            <p>{text}</p>
        </div>
    )
}