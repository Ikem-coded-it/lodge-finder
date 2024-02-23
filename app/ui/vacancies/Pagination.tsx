import Link from "next/link";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

export default function Pagination() {
  return (
    <div className="w-full lg:w-[200px] h-[120px] lg:h-[556px] flex justify-center items-center px-[20px] lg:px-0">
      <div className="w-full lg:w-[88px] h-full lg:h-[498px] flex flex-col justify-between items-start lg:items-center gap-[15px] lg:gap-[35px]">
        <h3 className="text-[15px] lg:text-[11px] text-lightFont-default text-left lg:text-center w-full">
          PAGES
        </h3>

        <PaginationButtons/>

        <ArrowButtons/>
      </div>
    </div>
  )
}

const buttonsData = [
  {text: "1"},
  {text: "2"},
  {text: "3"},
  {text: "4"},
  {text: "5"},
]

function PaginationButtons() {
  return (
    <div className="flex lg:flex-col h-fit lg:h-[388px] w-full justify-start lg:justify-between items-start lg:items-center gap-[15px]">
      {
        buttonsData.map((button, index) => {
          return (
            <button key={index} className="w-[35px] h-[35px] border-[1px] border-darkBlue-default text-[14px] rounded-[50%]">
              {button.text}
            </button>
          )
        })
      }
    </div>
  )
}

function ArrowButtons() {
  return (
    <div className="h-fit w-[100px] lg:w-full lg:mt-[15px] flex justify-between items-center">
      <button className="w-[29px] h-[30px] bg-lightBlue-default flex justify-center items-center rounded-[50%]">
        <RxCaretLeft size="20px" color="#000000"/>
      </button>

      <button className="w-[29px] h-[30px] bg-lightBlue-default flex justify-center items-center rounded-[50%]">
        <RxCaretRight size="20px" color="#000000"/>
      </button>
    </div>
  )
}