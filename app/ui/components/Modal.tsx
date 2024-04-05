import { MdOutlineClose } from "react-icons/md";
import cn from "@/app/lib/utils/cn";

type ModalTypes = {
    isOpen: boolean
    closeModal: () => void
    children: React.ReactNode
    title: string
    description?: string
    className?: string
}

export default function Modal({
    isOpen,
    closeModal,
    children,
    title,
    description,
    className
}: ModalTypes) {
    return (
        <div className={cn(
            "h-screen w-screen flex justify-center items-start gap-6 pt-10 fixed top-0 right-0 z-[110] bg-slate-700 bg-opacity-80",
            className,
            {"hidden": isOpen == false}
        )}>
            <div className="rounded-[10px] bg-white w-[320px] md:w-[70%] lg:w-[800px] h-[95vh] overflow-y-auto flex flex-col justify-start items-center p-6 gap-7">
                <h1 className="text-3xl text-[#000000]">
                    {title}
                </h1>
                {description && <p>
                    {description}
                </p> }
                {children}
            </div>

            <button
            type="button"
            className="h-fit w-fit"
            onClick={closeModal}
            >
                <MdOutlineClose size="30px" color="white"/>
            </button>
        </div>
    )
}