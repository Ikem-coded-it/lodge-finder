"use client";

import LodgeFinderLogo from "@/app/ui/components/Nav/LodgeFinderLogo";
import Button from "@/app/ui/components/Button";
import Link from "next/link";
import clsx from "clsx";
import { IoHelpCircleOutline } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";
import { usePathname } from "next/navigation";
import { caretakerLinks } from "@/app/lib/store/sidebar";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <section
      className={
        "flex flex-col items-center justify-start gap-[50px] w-[230px] h-[100vh] bg-whiteBg-default"
      }
    >
      <div className="w-full h-[80px] flex justify-between items-center px-[15px] pt-[10px]">
        <LodgeFinderLogo />
      </div>

      <ul className="flex flex-col items-start justify-start gap-2 h-fit w-[182px] border-y-[1px] border-darkFont-default py-[30px]">
        {caretakerLinks.map((link) => {
          return (
            <li
              key={link.text}
              className="list-none text-darkFontBlue-default w-full h-fit-content"
            >
              <a
                href={link.href}
                className={clsx(
                  "flex justify-start items-center gap-[10px] text-[13px] h-[40px] w-full pl-[10px] hover:bg-lightBlue-default",
                  {
                    "bg-lightBlue-default": pathname === link.href,
                  }
                )}
              >
                {link.icon}
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col w-full gap-2 items-start justify-start pl-[28px]">
        <Link
          href="/contact-us"
          className="flex justify-start items-center gap-[10px] text-[13px]"
        >
          <IoHelpCircleOutline size="20px" />
          Help
        </Link>

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
  );
}
