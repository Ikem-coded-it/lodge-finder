import { Skeleton } from 'primereact/skeleton';

export function VerticalLodgeCardSkeleton() {
    return(
        <div className="min-w-[390px] md:min-w-[405px] max-w-[390px] rounded-[8px] p-[20px] gap-[20px] bg-lightGreyBg-default">
            <div className="w-full flex flex-col items-start gap-2">
                <Skeleton height='2rem'></Skeleton>
                <Skeleton width="10rem" className=" w-1/2"></Skeleton>
            </div>

            <Skeleton height="22rem" className="w-full"></Skeleton>

            <div className="grid grid-cols-2">
                <Skeleton width="10rem" height="3.3rem"></Skeleton>
                <Skeleton width="10rem" height="3.3rem"></Skeleton>
                <Skeleton width="10rem" height="3.3rem"></Skeleton>
            </div>

            <div className="w-full flex justify-end gap-3">
                <Skeleton className='w-[100px] h-[50px]'></Skeleton>
                <Skeleton className='w-[100px] h-[50px]'></Skeleton>
            </div>
        </div>
    )
}

export function HorizontalLodgeCardSkeleton() {
    return(
        <div>

        </div>
    )
}