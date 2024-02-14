'use client';

import clsx from "clsx";
import { MouseEventHandler, ReactNode } from "react";

export default function Button({
  children,
  text,
  border,
  bg,
  className,
  onClick
} : {
  children?: ReactNode,
  text: string,
  border?: boolean,
  bg?: boolean,
  className?: string,
  onClick?: MouseEventHandler<HTMLButtonElement>

}) {
  return (
    <button onClick={onClick} className={clsx(
      `p-0 flex justify-center items-center text-darkFontBlue-default rounded-[50px] ${className} text-[14px]`,

      {
        // if border then show border, if background color then show background color
        'border-[1px] border-darkBlue-default': border,
        'border-none': !border,
        'bg-lightBlue-default': bg,
        'bg-transparent': !bg,
      }
    )}>
      {children}
      {text}
    </button>
  )
}