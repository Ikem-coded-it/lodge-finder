import Container from "@/app/ui/components/Container";
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
          className="h-[50px] lg:h-[70px] w-auto"
          alt="Lodge finder's logo that's also a link to the homepage"
          priority
        />
      </Link>
    </Container>
  )
}