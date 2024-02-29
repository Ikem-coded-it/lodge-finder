'use client';
import LodgeFinderLogo from "@/app/ui/components/Nav/LodgeFinderLogo";
import Button from "@/app/ui/components/Button";
import Link from "next/link";
import clsx from "clsx";
import React from "react";
import { CiHome } from "react-icons/ci";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { RiContactsLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { IoHelpCircleOutline } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";

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
                <Link href={link.href} className="flex flex-col gap-[5px] text-[13px]">
                  {link.text}
                  <div className={clsx(
                    'active h-[3px] w-[37px]',
                    {
                      'bg-darkBlue-default': pathname === link.href
                    }
                  )}
                  />
                </Link>
              </li>
            )
          })
        }
      </ul>

      <div className="flex flex-col w-full gap-[40px] items-start justify-start px-[50px]">
        <Link href="/auth/login">
          <Button 
          text="Login"
          className="w-[77px] h-[37px]"
          />
        </Link>

        <Link href="/auth/proceed">
          <Button 
          text="Sign up"
          bg
          className="w-[77px] h-[40px]"
          border={() => {
            return pathname === "/auth/proceed" || pathname === "/auth/signup" ?
            true : false
          }}
          />
        </Link>
      </div>
    </section>
  )
}













const caretakerLinks = [
  {href: "/", text: "Home", icon: <CiHome size="20px" />},
  {href: "/vacancies", text: "Vacancies", icon: <FaHouseChimneyUser size="20px" />},
  {href: "/contact-us", text: "Contact us", icon: <RiContactsLine size="20px" />},
  {href: "/dashboard", text: "Dashboard", icon: <RxDashboard size="20px" />},
]

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
        'right-0': isOpen,
        'right-[-800px]': !isOpen,
      },
      "fixed z-20 top-0 flex md:hidden flex-col items-start gap-[50px] w-[100vw] h-[100vh] bg-whiteBg-default transition-all ease-in-out duration-[.5s]"
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

      <ul className="flex flex-col items-start justify-start gap-[20px] h-[fit-content] w-[60%] pl-[20px] border-y-[1px] border-darkFont-default py-[30px]">
        {
          caretakerLinks.map(link => {
            return(
              <li key={link.text} className="list-none text-darkFontBlue-default w-full h-fit-content">
                <Link href={link.href} className={clsx(
                  "flex justify-start items-center gap-[10px] text-[13px] h-[40px] w-full pl-[10px]",
                  {
                    'bg-lightBlue-default': pathname === link.href
                  }
                )}>
                  {link.icon}
                  {link.text}
                </Link>
              </li>
            )
          })
        }
      </ul>

      <div className="flex flex-col w-full gap-[40px] items-start justify-start pl-[28px]">
        <Link href="/" className="flex justify-start items-center gap-[10px] text-[13px]">
          <IoHelpCircleOutline size="20px" />
          Help
        </Link>

        <Button
        text="Logout"
        className="w-[77px] h-[37px] text-red-400 gap-[10px]"
        >
          <SlLogout color="red" size="20px" />
        </Button>
      </div>
    </section>
  )
}