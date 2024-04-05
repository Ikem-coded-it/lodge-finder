"use client"

import { HiOutlineUser } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { useFormikContext } from "formik";
import DynamicInputField from "@/app/ui/components/Form/input";

export default function CaretakerDetailsInput() {
    const { values, handleChange, handleBlur, errors, touched } = useFormikContext<any>()
    const caretakerDetails = {
        name: "Paul Emeribe",
        callNumber: "+2347845968879",
        whatsappNumber: "+2347845968879"
    }
  return (
    <div className="w-full h-fit">
      <div className="grid grid-cols-2 w-full">
        <div className="w-[150px] h-[53px] flex items-start justify-start gap-[10px]">
          <HiOutlineUser size="18px" color="#555555"/>

          <div className="flex flex-col justify-start items-start">
            <h4 className="text-[13px] font-[500] text-darkFont-default">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Caretaker's name
            </h4>
            <p className="text-[11px] font-[500] text-lightFont-default">
                {caretakerDetails.name}
            </p>
          </div>
        </div>

        <div className="w-[150px] h-[53px] flex items-start justify-start gap-[10px]">
          <BsTelephone size="18px" color="#555555"/>

          <div className="flex flex-col justify-start items-start">
            <h4 className="text-[13px] font-[500] text-darkFont-default">
              Call number
            </h4>
            <p className="text-[11px] font-[500] text-lightFont-default">
              {caretakerDetails.callNumber}
            </p>
          </div>
        </div>

        <div className="w-[150px] h-[53px] flex items-start justify-start gap-[10px]">
          <FaWhatsapp size="18px" color="#555555"/>

          <div className="flex flex-col justify-start items-start">
            <h4 className="text-[13px] font-[500] text-darkFont-default">
              Whatsapp
            </h4>
            <p className="text-[11px] font-[500] text-lightFont-default">
              {caretakerDetails.whatsappNumber}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-[111px] flex items-start justify-start gap-[10px]">
        <CiCircleInfo size="18px" color="#555555"/>

        <div className="flex flex-col justify-start items-start w-[90%]">
          <label htmlFor="additionalInfo" className="text-[13px] font-[500] text-darkFont-default">
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
  )
}