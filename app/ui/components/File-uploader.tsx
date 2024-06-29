import clsx from "clsx";
import cn from "@/app/lib/utils/cn";
import { SlPicture } from "react-icons/sl";
import React, { useState } from "react";
import { useFormikContext } from "formik";
import ChooseImageBtn from "@/app/ui/components/Dashboard/choose-image-btn";
import CloudinaryService, {
  cloudinaryService,
} from "@/app/lib/services/cloudinary.service";
import $http from "@/app/lib/services/$http";

export default function FileUploadDisplay({
  info,
  className,
  increaseSlide,
}: {
  info: any;
  className?: string;
  increaseSlide?: () => void;
}) {
  const { setFieldValue, values, errors, handleChange, handleBlur } =
    useFormikContext<any>();
  const [file, setFile] = useState<string | null>(null);
  const mergedClasses = cn(
    "flex flex-col gap-6 justify-center items-center min-w-full h-full rounded-[10px] absolute transition-opacity duration-[.2s] ease-out",
    className
  );

  const displayImage = (e: any) => {
    handleChange(e);
    const file = e.target.files[0];
    const reader = new FileReader();

    // const formData = new FormData();

    // formData.append("file", file);

    // (async () => {
    //   await $http.post("/api/cloudinary", formData);
    // })();

    reader.onload = (e) => {
      const fileBlob = e.target?.result;
      setFieldValue(`images.${info.key}`, fileBlob);
      setFile(fileBlob as any);

      //@ts-ignore
      increaseSlide();
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={mergedClasses}>
      <div className="relative w-full h-full flex flex-col justify-center items-center bg-lightGreyBg-default">
        <img
          className={clsx(
            "absolute top-0 w-full h-full z-10 object-center object-cover",
            {
              "opacity-100": file,
              "opacity-0": !file,
            }
          )}
          src={file as string}
          alt="Vacancy picture"
        />
        <SlPicture size="25px" color="#86198f" />
        <label>{info.label}</label>
        {errors?.[`images.${info.key}`] && (
          <p className="text-red-500">
            {errors?.[`images.${info.key}`] as string}
          </p>
        )}
      </div>

      <ChooseImageBtn
        name={`images.${info.key}`}
        onChange={(e: any) => displayImage(e)}
        onBlur={handleBlur}
      />
    </div>
  );
}
