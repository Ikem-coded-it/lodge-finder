"use client";
import { MdSearch } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

export default function SearchBar({button}: {button?:boolean}) {
  return (
    <form className="flex items-center justify-start gap-[5px] h-fit w-fit">
      <div className="w-[260px] md:w-[528px] h-[30px] md:h-[41px] flex items-center justify-start px-[8px] gap-[8px] bg-[#F0F4F8]">
        <MdSearch size="21px" color="#000000"/>
        <input
        className="h-[20px] md:h-[25px] w-[90%] bg-transparent text-[15px]"
        placeholder="Search for vacancies by lodge name or location"
        />
      </div>
      {
        button && (
          <button
          className="w-[50px] h-[41px] rounded-[6px] bg-lightBlue-default border-none flex justify-center items-center"
          type="submit">
          <FaArrowRight/>
        </button>
        )
      }
    </form>
  )
}