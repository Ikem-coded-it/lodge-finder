
import clsx from "clsx";
import cn from "@/app/lib/utils/cn";
import { SlPicture } from "react-icons/sl";
import React, { useState } from 'react';
import { useFormikContext } from "formik";

export default function FileUploadDisplay({
    info,
    className
  }: {
    info: any,
    className?: string
  }) {

        const { setFieldValue, values, errors, handleChange, handleBlur } = useFormikContext<any>();
      const [file, setFile] = useState<string | null>(null)
      const mergedClasses = cn(
        "flex flex-col gap-6 justify-center items-center min-w-full h-full rounded-[10px] absolute transition-opacity duration-[.2s] ease-out",
        className
      )
  
      const displayImage = (e: any) => {
          handleChange(e)
          const file = e.target.files[0]
          const reader = new FileReader()
      
          reader.onload = (e) => {
            const fileBlob = e.target?.result
            setFieldValue(`images.${info.key}`, fileBlob)
            setFile(fileBlob as any);
          }
          reader.readAsDataURL(file)
      }
      
      return (
          <div className={mergedClasses}>
              <div className="relative w-full h-full flex flex-col justify-center items-center bg-lightGreyBg-default">
                  <img
                  className={clsx(
                      "absolute top-0 w-full h-full z-10",
                      {
                          "opacity-100": file,
                          "opacity-0": !file
                      }
                  )}
                  src={file as string}
                  alt="Vacancy picture"
                  />
                  <SlPicture size="25px" color="#86198f"/>
                  <label>{info.label}</label>
                  {
                    errors?.[`images.${info.key}`] &&
                    <p className="text-red-500">
                      {errors?.[`images.${info.key}`] as string}
                    </p>
                  }
              </div>
  
              <div className="relative">
                <label
                htmlFor={`images.${info.key}`}
                className="p-0 flex justify-center items-center text-darkFontBlue-default rounded-[50px] text-[14px] hover:bg-blue-600 hover:text-slate-50 transition-all ease-out duration-[.2s] border-[1px] border-darkBlue-default w-[100px]"
                >
                  choose image
                </label>
  
                <input
                type="file"
                id={`images.${info.key}`}
                name={`images.${info.key}`}
                accept="image/*"
                onChange={(e) => displayImage(e)}
                onBlur={handleBlur}
                className="hidden"
                />
              </div>
  
          </div>
      )
  }
          