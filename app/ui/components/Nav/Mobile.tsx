'use client';
import LodgeFinderLogo from "@/app/ui/components/Nav/LodgeFinderLogo";
import Button from "@/app/ui/components/Button";
import Link from "next/link";
import clsx from "clsx";
import React from "react";
import { IoHelpCircleOutline } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";
import { caretakerLinks } from "@/app/lib/store/sidebar";

const lodgeHunterLinks = [
  {href: "/", text: "Home"},
  {href: "/vacancies", text: "Vacancies"},
  {href: "/contact-us", text: "Contact us"},
]

type CloseFunction = () => void;

export function MainMenu({
  isOpen,
  close,
  pathname
} : {
  isOpen: boolean,
  close: CloseFunction,
  pathname: string
}){

  return (
    <section className={clsx(
      {
        'right-0': isOpen,
        'right-[-800px]': !isOpen,
      },
      "fixed z-[100] top-0 flex md:hidden flex-col items-start gap-[70px] w-[100vw] h-[100vh] bg-whiteBg-default transition-all ease-in-out duration-[.5s]"
    )}>
      <div className="w-full h-[80px] flex justify-between items-center px-[15px] pt-[10px]">
        <LodgeFinderLogo/>

        <Button
        bg
        text="Close"
        className="w-[78px] h-[37px]"
        onClick={close}
        />
      </div>

      <ul className="flex flex-col items-start justify-start gap-[40px] h-[fit-content] w-full px-[50px]">
        {
          lodgeHunterLinks.map(link => {
            return(
              <li key={link.text} className="list-none text-darkFontBlue-default">
                <a href={link.href} className="flex flex-col gap-[5px] text-[13px]">
                  {link.text}
                  <div className={clsx(
                    'active h-[3px] w-[37px]',
                    {
                      'bg-darkBlue-default': pathname === link.href
                    }
                  )}
                  />
                </a>
              </li>
            )
          })
        }
      </ul>

      <div className="flex flex-col w-full gap-[40px] items-start justify-start px-[50px]">
        <a href="/api/auth/login">
          <Button 
          text="Login"
          className="w-[77px] h-[37px]"
          />
        </a>

        <a href="/auth/proceed">
          <Button 
          text="Sign up"
          bg
          className="w-[77px] h-[40px]"
          border={() => {
            return pathname === "/auth/proceed" || pathname === "/auth/signup" ?
            true : false
          }}
          />
        </a>
      </div>
    </section>
  )
}

export function CaretakerMenu({
  isOpen,
  close,
  pathname
} : {
  isOpen: boolean,
  close: CloseFunction,
  pathname: string
}) {

  return (
    <section className={clsx(
      {
        'left-0': isOpen,
        'left-[1000px]': !isOpen,
      },
      "fixed z-20 top-0 flex lg:hidden flex-col items-start gap-[50px] w-[100vw] h-[100vh] bg-whiteBg-default transition-all ease-in-out duration-[.5s]"
    )}>
      <div className="w-full h-[80px] flex justify-between items-center px-[15px] pt-[10px]">
        <LodgeFinderLogo/>

        <Button
        bg
        text="Close"
        className="w-[78px] h-[37px]"
        onClick={close}
        />
      </div>

      <ul className="flex flex-col items-start justify-start gap-2 h-[fit-content] w-[60%] pl-[20px] border-y-[1px] border-darkFont-default py-[30px]">
        {
          caretakerLinks.map(link => {
            return(
              <li key={link.text} className="list-none text-darkFontBlue-default w-full h-fit-content">
                <a href={link.href} className={clsx(
                  "flex justify-start items-center gap-[10px] text-[13px] h-[40px] w-full pl-[10px]",
                  {
                    'bg-lightBlue-default': pathname === link.href
                  }
                )}>
                  {link.icon}
                  {link.text}
                </a>
              </li>
            )
          })
        }
      </ul>

      <div className="flex flex-col w-full gap-2 items-start justify-start pl-[28px]">
        <a href="/" className="flex justify-start items-center gap-[10px] text-[13px]">
          <IoHelpCircleOutline size="20px" />
          Help
        </a>

        <a href="/api/auth/logout">
          <Button
          text="Logout"
          className="w-[77px] h-[37px] text-red-400 gap-[10px]"
          >
            <SlLogout color="red" size="20px" />
          </Button>
        </a>
      </div>
    </section>
  )
}