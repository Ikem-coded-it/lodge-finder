"use client"

import Button from "@/app/ui/components/Button";
import Link from "next/link";

export default function ProceedPageButtons() {
  return(
    <>
      <div className="w-full h-fit flex flex-col justify-start items-center gap-[40px]">
        <a href="/api/auth/signup">
          <Button
          text="Proceed to sign up"
          bg
          className="w-[200px] h-[35px]"
          />
        </a>

        <p className="text-[12px] font-[500] text-darkFont-default">
          Already have an account?
          <span className="font-[800]">
            <a
            href="/api/auth/login"
            className="text-blue-700"
            >
              {" " + "Login instead"}
            </a>
          </span>
        </p>

        <Button
        text="Cancel"
        border
        onClick={() => history.back()}
        className="w-[80px] h-[35px]"
        />
      </div>
    </>
  )
}