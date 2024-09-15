"use client";

import { HiOutlineUser } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { useFormikContext } from "formik";
import DynamicInputField from "@/app/ui/components/Form/input";
import { useCreateVacanciesContext } from "@/app/context/create-vacancies-context";
import { useEffect, useState } from "react";

export default function CaretakerDetailsInput() {
  const { values, handleChange, handleBlur, errors, touched } =
    useFormikContext<any>();
  const context = useCreateVacanciesContext();
  const caretaker = context?.caretaker;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (caretaker) {
      setLoading(false);
    }
  }, [caretaker]);

  return (
    <>
      {loading ? (
        <div>
          <p className="text-center text-xs ">Fetching caretaker info...</p>
        </div>
      ) : (
        <div className="w-full h-fit">
          <div className="grid grid-cols-2 w-full">
            <div className="w-[150px] h-[53px] flex items-start justify-start gap-[10px]">
              <HiOutlineUser size="18px" color="#555555" />

              <div className="flex flex-col justify-start items-start">
                <h4 className="text-[13px] font-[500] text-darkFont-default">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  Caretaker's name
                </h4>
                <p className="text-[11px] font-[500] text-lightFont-default">
                  {caretaker?.firstName} {caretaker?.lastName}
                </p>
              </div>
            </div>

            <div className="w-[150px] h-[53px] flex items-start justify-start gap-[10px]">
              <BsTelephone size="18px" color="#555555" />

              <div className="flex flex-col justify-start items-start">
                <h4 className="text-[13px] font-[500] text-darkFont-default">
                  Call number
                </h4>
                <p className="text-[11px] font-[500] text-lightFont-default">
                  {caretaker?.callNumber}
                </p>
              </div>
            </div>

            <div className="w-[150px] h-[53px] flex items-start justify-start gap-[10px]">
              <FaWhatsapp size="18px" color="#555555" />

              <div className="flex flex-col justify-start items-start">
                <h4 className="text-[13px] font-[500] text-darkFont-default">
                  Whatsapp
                </h4>
                <p className="text-[11px] font-[500] text-lightFont-default">
                  {caretaker?.whatsappNumber}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full min-h-[111px] flex items-start justify-start gap-[10px]">
            <CiCircleInfo size="18px" color="#555555" />

            <div className="flex flex-col justify-start items-start w-[90%]">
              <label
                htmlFor="additionalInfo"
                className="text-[13px] font-[500] text-darkFont-default"
              >
                Additional info
              </label>
              <DynamicInputField
                type="textarea"
                name="additionalInfo"
                value={values.additionalInfo}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.additionalInfo as string}
                touched={touched.additionalInfo as boolean}
                className="w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
