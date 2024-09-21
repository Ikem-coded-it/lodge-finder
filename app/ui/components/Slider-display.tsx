"use client";
import Image from "next/image";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import clsx from "clsx";
import cn from "@/app/lib/utils/cn";
import { SlPicture } from "react-icons/sl";
import React, { useState, useEffect } from "react";
import FileUploadDisplay from "./File-uploader";
import { useFormikContext } from "formik";

type ImageErrors =
  | {
      buildingImageURL?: string | undefined;
      roomImageURL?: string | undefined;
      bathroomImageURL?: string | undefined;
      balconyImageURL?: string | undefined;
      kitchenImageURL?: string | undefined;
    }
  | any;

type ImageTouched =
  | {
      buildingImageURL?: boolean | undefined;
      roomImageURL?: boolean | undefined;
      bathroomImageURL?: boolean | undefined;
      balconyImageURL?: boolean | undefined;
      kitchenImageURL?: boolean | undefined;
    }
  | any;

export default function DisplaySlider({
  className,
  type,
  data,
  imageErrors,
  imageTouched,
}: {
  className?: string;
  type: "upload" | "display";
  data: any[];
  imageErrors?: ImageErrors;
  imageTouched?: ImageTouched;
}) {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const { values = {} } = useFormikContext<any>() || {};

  function increaseSlide() {
    setActiveImageIndex((prev) => (prev + 1) % data.length);
  }

  function decreaseSlide() {
    setActiveImageIndex((prev) => {
      return prev === 0 ? data.length - 1 : prev - 1;
    });
  }

  const mergedClasses = cn(
    "min-w-full min-h-[400px] max-h-fit mb-[20px] flex flex-col items-center justify-start gap-3",
    className
  );

  return (
    <div className={mergedClasses}>
      <div className="w-full h-[320px] relative">
        {type === "display"
          ? data.map(({ url, type }, index) => {
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
                );
              else
                return (
                  <DefaultImageDisplay
                    key={index}
                    className={clsx({
                      "opacity-100": index === activeImageIndex,
                      "opacity-0": index !== activeImageIndex,
                    })}
                    text={type + " here"}
                  />
                );
            })
          : data.map((info, index) => {
              return (
                <div
                  key={index}
                  className={clsx({
                    "opacity-100 pointer-events-auto":
                      index === activeImageIndex,
                    "opacity-0 pointer-events-none": index !== activeImageIndex,
                  })}
                >
                  <FileUploadDisplay
                    info={info}
                    increaseSlide={increaseSlide}
                    defaultUrl={values?.images?.[info?.key]}
                  />
                </div>
              );
            })}
      </div>

      {/* show errors if any images aren't uploaded */}
      {type === "upload" && (
        <div>
          {imageErrors?.bathroomImageURL && imageTouched?.bathroomImageURL && (
            <p className="text-red-500 text-xs">
              {imageErrors?.bathroomImageURL}
            </p>
          )}
          {imageErrors?.roomImageURL && imageTouched?.roomImageURL && (
            <p className="text-red-500 text-xs">{imageErrors?.roomImageURL}</p>
          )}
          {imageErrors?.buildingImageURL && imageTouched?.buildingImageURL && (
            <p className="text-red-500 text-xs">
              {imageErrors?.buildingImageURL}
            </p>
          )}
          {imageErrors?.kitchenImageURL && imageTouched?.kitchenImageURL && (
            <p className="text-red-500 text-xs">
              {imageErrors?.kitchenImageURL}
            </p>
          )}
          {imageErrors?.balconyImageURL && imageTouched?.balconyImageURL && (
            <p className="text-red-500 text-xs">
              {imageErrors?.balconyImageURL}
            </p>
          )}
        </div>
      )}

      <div className="w-fit h-[30px] flex justify-center items-center">
        <button
          type="button"
          onClick={decreaseSlide}
          className="h-full w-[29px] flex justify-center items-center"
        >
          <RxCaretLeft size="30px" />
        </button>

        <div className="flex justify-center items-center h-full gap-[10px] lg:gap-[5px]">
          {data.map((_, index) => {
            return (
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
            );
          })}
        </div>

        <button
          type="button"
          onClick={increaseSlide}
          className="h-full w-[29px] flex justify-center items-center"
        >
          <RxCaretRight size="30px" />
        </button>
      </div>
    </div>
  );
}

function DefaultImageDisplay({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  const mergedClasses = cn(
    "flex flex-col gap-2 justify-center items-center min-w-full h-full rounded-[10px] absolute transition-opacity duration-[.2s] ease-out bg-lightGreyBg-default",
    className
  );
  return (
    <div className={mergedClasses}>
      <SlPicture size="25px" color="#86198f" />
      <p>{text}</p>
    </div>
  );
}
