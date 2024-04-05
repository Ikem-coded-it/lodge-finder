"use client";

import clsx from "clsx";
import { MouseEventHandler, ReactNode } from "react";
import cn from "@/app/lib/utils/cn";
import { IconType } from "react-icons";

type BorderType = () => boolean

export default function Button({
  children,
  text,
  border,
  bg,
  className,
  onClick,
  type,
  disabled
} : {
  children?: ReactNode,
  text: string,
  border?: boolean | BorderType,
  bg?: boolean,
  className?: string,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  type?: "button" | "submit" | "reset" | undefined,
  disabled?: boolean
}) {

  const classIn = cn(
    "p-0 flex justify-center items-center text-darkFontBlue-default rounded-[50px] text-[14px] hover:bg-blue-600 hover:text-slate-50 transition-all ease-out duration-[.2s]",
    className
  )

  return (
    <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={clsx(
      classIn,
      {
        // if border then show border, if background color then show background color
        'border-[1px] border-darkBlue-default': border,
        'border-none ': !border,
        'bg-lightBlue-default': bg,
        'bg-transparent': !bg,
      }
    )}>
      {children}
      {text}
    </button>
  )
}