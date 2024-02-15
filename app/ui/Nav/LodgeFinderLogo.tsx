import Container from "@/app/ui/Container";
import Image from "next/image";
import Link from "next/link";

export default function LodgeFinderLogo() {
  return (
    <Container fluid className="h-[100%] w-[fit-content]">
      <Link href="/">
        <Image
          src="/logo.png"
          width={100}
          height={60}
          className="h-[70px] w-[100px]"
          alt="Lodge finder's logo that's also a link to the homepage"
          objectFit="cover"
        />
      </Link>
    </Container>
  )
}