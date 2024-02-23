"use client";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function SearchBar() {
  return (
    <section className="fixed top-[80px] z-20 left-0 w-full flex justify-start items-center px-[10px] md:px-[30px] py-[20px] h-[81px] bg-whiteBg-default">
      <form className="flex items-center justify-start gap-[5px] h-fit w-fit">
        <div className="w-[260px] md:w-[528px] h-[41px] flex items-center justify-start px-[8px] gap-[8px] bg-[#F0F4F8]">
          <FaSearch size="21px" color="#000000"/>
          <input
          className="h-[25px] w-[90%] bg-transparent text-[15px]"
          placeholder="Search for vacancies by lodge name or location"
          />
        </div>
        <button className="w-[50px] h-[41px] rounded-[6px] bg-lightBlue-default border-none flex justify-center items-center">
          <FaArrowRight/>
        </button>
      </form>
    </section>
  )
}