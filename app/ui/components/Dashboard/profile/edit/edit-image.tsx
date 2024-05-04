'use client'
import ChooseImageBtn from "@/app/ui/components/Dashboard/choose-image-btn";
import { useFormikContext } from "formik";
import { useState } from "react"

export default function EditImage() {
    const { handleBlur, handleChange, setFieldValue, values } = useFormikContext<any>();
    const [file, setFile] = useState<string | null>(null)

    const displayImage = (e: any) => {
        handleChange(e)
        const file = e.target.files[0]
        const reader = new FileReader()
    
        reader.onload = (e) => {
          const fileBlob = e.target?.result
          setFieldValue(`imageURL`, fileBlob)
          setFile(fileBlob as any);
        }
        reader.readAsDataURL(file)
    }

    return(
        <div className="flex flex-col justify-normal items-center gap-[10px]">
            <img
            className="w-[100px] h-[100px] rounded-[50%] object-center object-cover"
            src={file ?? values.imageURL}
            alt={values.fullName + "'s avatar"}
            />

            <ChooseImageBtn
            name="imageURL"
            onChange={(e: any) => displayImage(e)}
            onBlur={handleBlur}
            />
        </div>
    )
}