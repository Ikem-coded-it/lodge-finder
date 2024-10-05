"use client";

import Container from "@/app/ui/components/Container";
import Link from "next/link";
import Button from "@/app/ui/components/Button";
import LodgeFinderLogo from "@/app/ui/components/Nav/LodgeFinderLogo";
import { MainMenu, CaretakerMenu } from "@/app/ui/components/Nav/Mobile";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ImCoinDollar } from "react-icons/im";
import { useEffect, useState } from "react";
import caretakerService from "@/app/lib/services/caretaker.service";
import { Caretaker } from "@/app/lib/definitions/caretaker";

const links = [
  { href: "/", text: "Home" },
  { href: "/vacancies", text: "Vacancies" },
  { href: "/contact-us", text: "Contact Us" },
];

const navClasses =
  "bg-whiteBg-default fixed top-[0] left-[0] z-50 h-[60px] lg:h-[80px] w-full px-[15px] md:px-[30px] pt-[10px] flex justify-between items-center md:items-end";

export function MainNav() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setOpenMenu(false)
  }, [pathname])

  return (
    <nav className={`${navClasses}`}>
      <LodgeFinderLogo />

      <ul className="hidden md:flex h-full w-[287px] justify-evenly items-center">
        {links.map((link) => {
          return (
            <li key={link.text} className="list-none text-darkFontBlue-default">
              <a
                href={link.href}
                className="flex flex-col gap-[5px] text-[13px]"
              >
                {link.text}
                <div
                  className={clsx("active h-[3px] w-[37px]", {
                    "bg-darkBlue-default": pathname === link.href,
                  })}
                />
              </a>
            </li>
          );
        })}
      </ul>

      <Container
        fluid
        className="hidden md:flex h-full w-[187px] justify-between items-center"
      >
        <a href="/api/auth/login">
          <Button text="Login" className="w-[77px] h-[40px]" />
        </a>

        <a href="/auth/proceed">
          <Button text="Sign up" bg className="w-[77px] h-[40px]" />
        </a>
      </Container>

      <div className="md:hidden h-full w-[fit-content] flex justify-center items-center">
        <Button
          text="Menu"
          bg
          className="h-[37px] w-[78px]"
          onClick={() => setOpenMenu(true)}
        />
      </div>

      <MainMenu
        isOpen={openMenu}
        close={() => setOpenMenu(false)}
        pathname={pathname}
      />
    </nav>
  );
}

export function CaretakerNav() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const [caretaker, setCaretaker] = useState<Caretaker | null>(null);

  useEffect(() => {
    (async () => {
      const data = await caretakerService.me();

      if (data?.caretaker) setCaretaker(caretaker);
    })();
  }, []);

  useEffect(() => {
    setOpenMenu(false)
  }, [pathname])

  return (
    <nav className={`${navClasses}`}>
      <LodgeFinderLogo />

      <div className="flex md:hidden gap-[2px] items-center justify-center">
        <ImCoinDollar size="30px" />
        <span>{(caretaker as Caretaker)?.credits ?? 0}</span>
      </div>

      <ul className="hidden lg:flex h-full w-[287px] justify-evenly items-center">
        {links.map((link) => {
          return (
            <li key={link.text} className="list-none text-darkFontBlue-default">
              <a
                href={link.href}
                className="flex flex-col gap-[5px] text-[13px]"
              >
                {link.text}
                <div
                  className={clsx("active h-[3px] w-[37px]", {
                    "bg-darkBlue-default": pathname === link.href,
                  })}
                />
              </a>
            </li>
          );
        })}
      </ul>

      <Container
        fluid
        className="hidden lg:flex h-full w-[187px] justify-between items-center"
      >
        <a href="/api/auth/logout">
          <Button text="Logout" className="w-[77px] h-[40px]" />
        </a>

        <a href="/dashboard/vacancies">
          <Button text="Dashboard" bg className="w-[100px] h-[40px]" />
        </a>
      </Container>

      <div className="lg:hidden h-full w-[fit-content] flex justify-center items-center">
        <Button
          text="Menu"
          bg
          className="h-[37px] w-[78px]"
          onClick={() => setOpenMenu(true)}
        />
      </div>

      <CaretakerMenu
        isOpen={openMenu}
        close={() => setOpenMenu(false)}
        pathname={pathname}
      />
    </nav>
  );
}
