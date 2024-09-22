"use client";

import { useVacancies } from "@/app/context/vacancies-context";
import $http from "@/app/lib/services/$http";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { toast } from "react-toastify";

export default function Pagination() {
  const { totalDocument } = useVacancies();

  const [next, setNext] = useState(0);
  const [maxBtn, setMaxBtn] = useState(5);

  // the number of buttons available for pagination.
  const [buttonLength, setButtonLength] = useState(0);

  const limit = 10;

  return (
    <>
      {totalDocument > limit ? (
        <div className="w-full lg:w-[200px] h-[120px] lg:h-[556px] flex justify-center items-center px-[20px] lg:px-0">
          <div className="w-full lg:w-[88px] h-full lg:h-[498px] flex flex-col justify-between items-start lg:items-center gap-[15px] lg:gap-[35px]">
            <h3 className="text-[15px] lg:text-[11px] text-lightFont-default text-left lg:text-center w-full">
              PAGES
            </h3>

            <PaginationButtons
              next={next}
              maxBtn={maxBtn}
              setButtonLength={setButtonLength}
            />

            {buttonLength > 5 && (
              <ArrowButtons
                setNext={setNext}
                setMaxBtn={setMaxBtn}
                maxBtn={maxBtn}
              />
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}

function PaginationButtons({
  next,
  maxBtn,
  setButtonLength,
}: {
  next: number;
  maxBtn: number;
  setButtonLength: Dispatch<SetStateAction<number>>;
}) {
  const { totalDocument, setVacancies, setLoading } = useVacancies();

  let iteratorValue;
  const moduleValue = totalDocument % 10;

  if (moduleValue !== 0) {
    const divisionVal = Math.floor(totalDocument / 10);
    iteratorValue = divisionVal + 1;
  } else {
    iteratorValue = totalDocument / 10;
  }

  const buttonsData = Array.from({
    length: iteratorValue as number,
  }).map((_, i) => {
    return { text: i + 1 };
  });

  setButtonLength(iteratorValue);

  // Function to handle pagination
  const handlePagination = async (pageNumber: number) => {
    try {
      setLoading(true);
      const result = await $http.get(`/api/vacancy?page=${pageNumber}`);
      setVacancies(result?.data?.data); // Assuming the API returns vacancies in this format
    } catch (error) {
      toast.error("Error fetching vacancies");
      setLoading(false);
    }
  };

  return (
    <div className="flex lg:flex-col h-fit lg:h-[388px] w-full justify-start lg:justify-between items-start lg:items-center gap-[15px]">
      {buttonsData.slice(next, maxBtn).map((button, index) => {
        return (
          <button
            key={index}
            className="w-[35px] h-[35px] border-[1px] border-darkBlue-default text-[14px] rounded-[50%]"
            onClick={() => handlePagination(Number(button.text))}
            type="button"
          >
            {button.text}
          </button>
        );
      })}
    </div>
  );
}

function ArrowButtons({
  setNext,
  setMaxBtn,
  maxBtn,
}: {
  setNext: Dispatch<SetStateAction<number>>;
  setMaxBtn: Dispatch<SetStateAction<number>>;
  maxBtn: number;
}) {
  const { totalDocument } = useVacancies();
  const handleNext = () => {
    if (maxBtn < totalDocument) {
      setNext((prev) => prev + 5);
      setMaxBtn((prev) => prev + 5);
    }
  };

  const handlePrev = () => {
    if (maxBtn > 5) {
      setNext((prev) => prev - 5);
      setMaxBtn((prev) => prev - 5);
    }
  };
  return (
    <div className="h-fit w-[100px] lg:w-full lg:mt-[15px] flex justify-between items-center">
      <button
        className="w-[29px] h-[30px] bg-lightBlue-default flex justify-center items-center rounded-[50%]"
        onClick={handlePrev}
      >
        <RxCaretLeft size="20px" color="#000000" />
      </button>

      <button
        className="w-[29px] h-[30px] bg-lightBlue-default flex justify-center items-center rounded-[50%]"
        onClick={handleNext}
      >
        <RxCaretRight size="20px" color="#000000" />
      </button>
    </div>
  );
}
