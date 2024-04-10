import { ReactNode } from "react";

const DataColumn = ({children}: {children: ReactNode}) => (
    <div className="flex flex-col justify-start items-start gap-4 w-[200px]">
        {children}
    </div>
)

export default DataColumn