'use client';

import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  {text: "Home", href: "/"},
  {text: "Vacancies", href: "/vacancies"},
  {text: "Contact us", href: "/contact-us"},
  {text: "Privacy policy", href: "/"},
]

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="w-[94vw] md:w-[95vw] h-fit flex flex-col lg:flex-row items-start justify-start gap-[50px] lg:gap-[100px] my-[50px] bg-whiteBg-default pt-[20px]">
      <div className="flex flex-col items-start justify-start gap-[30px]">
        <p className="w-[264px] text-[14px] text-lightFont-default text-left">
          Get to know us more or want to reach out to us. You can follow us on our socials.
        </p>

        <div className="flex justify-start items-center gap-[10px]">
          <Link href="/">
            <FaFacebook size="30px" color="#000000" />
          </Link>

          <Link href="/">
            <FaXTwitter size="30px" color="#000000" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start gap-[20px]">
        {links.map((link, index) => {
          return (
            <Link
            key={link.text}
            href={link.href} 
            className={clsx(
              {'text-darkFont-default font-[800]': pathname === link.href},
              "text-[14px]"
            )}
            >
              {link.text}
            </Link>
          )
        })}
      </div>

      <p className="text-lightFont-default text-[14px]">
        Copyright @{new Date().getFullYear()} Lodge Finder. All rights reserved.
      </p>
    </footer>
  )
}