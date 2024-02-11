import Container from "@/app/ui/Container";
import { openSans } from "@/app/ui/font";
import Image from "next/image";

export default function Hero() {
  return <header className="w-[1220px] min-h-[646px] max-h-[fit-content] mt-[100px] flex justify-center rounded-t-[30px] overflow-hidden">
    <Container className="flex-1 bg-lightBlue-default pt-[90px] px-[60px] flex flex-col justify-start items-center gap-[50px]">
      <h1 className={`text-[59px] font-extrabold font-['Open-Sans'] text-darkFont-default ${openSans.className}`}>
        Lodge hunting stress-free.
      </h1>
    </Container>

    <Image
    alt="depiction of a pair of keys next to a toy house which hints at what the website is about"
    src="/housekey.jpg"
    width={610}
    height={646}
    className="h-[646px] flex-1"
    />
  </header>
}