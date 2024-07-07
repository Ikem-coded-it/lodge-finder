import Container from "@/app/ui/components/Container";
import Image from "next/image";
import Link from "next/link";
import cn from "@/app/lib/utils/cn";

export default function LodgeFinderLogo({ className }: {className?: string}) {
  return (
    <Container fluid className={cn("h-[100%] w-[fit-content]", className)}>
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