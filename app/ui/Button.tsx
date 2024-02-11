import clsx from "clsx";
import { ReactNode } from "react";

export default function Button({
  children,
  text,
  border,
  width,
  height,
  bg,
  className
} : {
  children?: ReactNode,
  text: string,
  border?: boolean,
  width?: string,
  height?: string,
  bg?: boolean,
  className?: string
}) {
  return (
    <button className={clsx(
      `p-0 flex justify-center items-center text-darkFontBlue-default w-[${width}] h-[${height}] rounded-[50px] ${className} text-[14px]`,

      {
        // if border then show border, if background color then show background color
        'border-[1px] border-darkBlue-default': border,
        'border-none': !border,
        'bg-lightBlue-default': bg,
        'bg-transparent': !bg,
        'w-[77px]': !width,
        'h-[40px]': !height,
      }
    )}>
      {children}
      {text}
    </button>
  )
}