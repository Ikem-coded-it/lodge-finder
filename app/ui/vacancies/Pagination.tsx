import Link from "next/link";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

export default function Pagination() {
  return (
    <div className="w-[200px] h-[556px] flex justify-center items-center">
      <div className="w-[88px] h-[498px] flex flex-col justify-between items-center gap-[35px]">
        <h3 className="text-[11px] text-lightFont-default text-center w-full">
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
    <div className="flex flex-col h-[388px] w-full justify-between items-center">
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
    <div className="h-fit w-full mt-[15px] flex justify-between items-center">
      <button className="w-[29px] h-[30px] border-[1px] border-darkFontBlue-default bg-lightBlue-default flex justify-center items-center">
        <RxCaretLeft size="20px" color="#000000"/>
      </button>

      <button className="w-[29px] h-[30px] border-[1px] border-darkFontBlue-default bg-lightBlue-default flex justify-center items-center">
        <RxCaretRight size="20px" color="#000000"/>
      </button>
    </div>
  )
}