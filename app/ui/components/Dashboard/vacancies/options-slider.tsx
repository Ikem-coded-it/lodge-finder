"use client"
import { useFormikContext } from "formik";
import { vacancyFormOptions } from "@/app/lib/store/vacancy-form";
import React from "react";
import cn from "@/app/lib/utils/cn";
import { Vacancy } from "@/app/lib/definitions/vacancy";
        

export default function OptionsSlider() {
    const items = vacancyFormOptions()
    return(
        <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-10 md:gap-6 h-[fit-content] w-fit">
            {
                items.map(({ key, label, icon, type }, index) => {
                    return (
                        <VacancyOptionInput
                        key={key}
                        name={key}
                        label={label}
                        icon={icon}
                        type={type as "select" | "input"}
                        index={index}
                        />
                    )
                })
            }
        </div>
    )
}

function VacancyOptionInput({
    icon,
    label,
    type,
    index,
    name
}: {
    icon: React.ReactNode,
    label: string,
    type: "select" | "input",
    index: number,
    name: string
}) {
    const [optionValue, setOptionValue] = React.useState<any>(null)
    const { setFieldValue, values, handleChange, handleBlur, errors, touched } = useFormikContext<any>()

    return (
        <div className="w-fit h-fit flex flex-col items-start justify-center gap-1">
            <div className={cn(
                "w-fit h-[fit-content] flex justify-between items-center gap-2",
                {"border-s-2 border-lightGreyBg-default" : index !== 0}
            )}> 
                <div className="flex flex-col items-center justify-center font-[500] text-[9px] gap-[5px]">
                    {icon}
                    <p className="text-center">{label}</p>
                </div>

                {
                    type === "select" &&
                    <div className="h-fit w-fit flex gap-2">
                        <div>
                            <input
                            type="radio"
                            name={name}
                            id={name}
                            className="hidden"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value="yes"
                            />
                            <label
                            htmlFor={name}
                            className={cn(
                                "w-[42px] h-[21px] bg-[#F0F4F8] flex justify-center items-center rounded-[50px] font-bold text-[9px]",
                                {"bg-lightBlue-default": optionValue === true}
                            )}
                            onClick={() => setOptionValue(true)}
                            >
                            YES
                            </label>
                        </div>

                        <div>
                            <input
                            type="radio"
                            name={name}
                            id={name + '2'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="hidden"
                            value="no"
                            />
                            <label
                            htmlFor={name + "2"}
                            className={cn(
                                "w-[42px] h-[21px] bg-[#F0F4F8] flex justify-center items-center rounded-[50px] font-bold text-[9px]",
                                {"bg-lightBlue-default": optionValue === false}
                            )}
                            onClick={() => setOptionValue(false)}
                            >
                            NO
                            </label>
                        </div>
                    </div>
                }

                {
                    type === "input" &&
                    <div className="w-[150px] h-fit p-2 bg-[#F0F4F8] flex justify-center items-center gap-1 rounded-[50px] font-[500]">
                    <input
                    type="number"
                    name={name}
                    id={name}
                    className="w-[80px] h-[27px] rounded-[5px] border-[1px] border-darkBlue-default outline-0 p-1 bg-transparent text-base"
                    value={values?.[name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                    
                    <p className="w-fit  text-[11px]">/per month</p>
                    </div>
                }
            </div>

            {/* validation error message */}
            {errors?.[name] && touched?.[name] && <p className="text-xs text-red-500">{errors[name] as string}</p>}
        </div>
    )
}