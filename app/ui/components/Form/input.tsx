'use client'

import { FaEye } from "react-icons/fa";
import cn from "@/app/lib/utils/cn";
import clsx from "clsx";
import { RiEyeCloseLine, RiEyeLine  } from "react-icons/ri";
import { useState, useEffect, useRef, RefObject, ChangeEvent } from "react";

type InputProps = {
  value: string | number,
  type: "text" | "password" | "number" | "textarea" | "email" | string,
  onChange: ChangeEvent<any> | any,
  onBlur: any,
  label?: string,
  name: string,
  className: string,
  inputClassName?: string;
  error?: string,
  placeholder?: string,
  touched: boolean | undefined
}

export default function DynamicInputField({
  value,
  type,
  onChange,
  onBlur,
  label,
  name,
  className,
  inputClassName,
  error,
  placeholder,
  touched
}: InputProps) {

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const inputRef: RefObject<HTMLInputElement> = useRef(null);

  useEffect(() => {
    if (inputRef.current !== null) {
      if (showPassword) {
        inputRef.current.type = "text"
      } else {
        inputRef.current.type = "password"
      }
    }
  }, [showPassword])

  const mergedClasses: string = cn(
    "h-fit flex flex-col items-start justify-start",
    className
  )

  return(
    <div className={mergedClasses}>
      {
      label && 
      <label 
      htmlFor={name}
      className="mb-[10px] font-[500] text-[13px] text-darkFont-default">
        {label}
      </label>
      }

      <div className={clsx(
        {
          "h-[62px]": type == "textarea",
          "h-[32px]": type !== "textarea",
        },
        "w-full rounded-[5px] border-[1px] border-darkBlue-default overflow-clip flex justify-start items-center"
      )}>
        {
          type == "textarea" ? (
            <textarea
            id={name}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className={cn(
              "min-w-[90%] max-w-[90%] min-h-full max-h-full border-none outline-none bg-transparent px-1 py-2 text-sm text-darkFont-default font-medium",
              inputClassName
            )}
            value={value}
            />
          ):(
            <input
            ref={inputRef}
            id={name}
            name={name}
            type={type}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            placeholder={placeholder}
            className={cn(
              "w-[90%] h-full border-none outline-none active:bg-transparent px-1 py-2 text-sm text-darkFont-default font-medium",
              inputClassName
            )}
            />
          )
        }
        {
          type === "password" && (
            <button
            type="button"
            className='h-full w-fit p-0 border-none'
            onClick={() => setShowPassword(!showPassword)}
            >
              <RiEyeLine/>
            </button>
          )
        }
      </div>

      {touched && error ? <p className="text-red-400 text-[12px] text-left">{error}</p> : null}
    </div>
  )
}