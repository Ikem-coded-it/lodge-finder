import { ReactNode } from "react";

type Props = {
  children: ReactNode,
  title: string,
  description: string
}

export default function FormContainer({
  children,
  title,
  description
}: Props) {
  return(
    <div className="w-[320px] md:w-[500px] h-fit py-[35px] px-[10px] md:py-[45px] md:px-[30px] bg-whiteBg-default flex flex-col justify-start items-center gap-[40px] rounded-[30px]">
      <div className="h-fit w-full">
        <h1 className="text-[18px] font-[800] w-full text-left text-darkFont-default mb-[20px]">
          {title}
        </h1>

        <p className="text-[13px] font-[400] text-darkFont-default w-full text-left">
          {description}
        </p>
      </div>

      <div className="w-full h-fit">
        {children}
      </div>
    </div>
  )
}