import Container from "@/app/ui/Container";
import Link from 'next/link';
import Image from 'next/image';
import Button from "@/app/ui/Button";

const links = [
  {href: "/", text: "Home"},
  {href: "/", text: "Vacancies"},
  {href: "/", text: "Contact us"},
]

const navClasses = "bg-whiteBg-default fixed top-[0] left-[0] z-10 h-[80px] w-full px-[30px] flex justify-between items-end"

export function LoggedOutNav() {
  return (
    <nav className={`${navClasses}`}>
      <Container fluid className="h-[100%] w-[fit-content]">
        <Link href="/">
          <Image
            src="/logo.png"
            width={100}
            height={60}
            className="h-[70px] w-[100px]"
            alt="Lodge finder's logo that's also a link to the homepage"
          />
        </Link>
      </Container>

      <ul className="h-full w-[287px] flex justify-evenly items-center">
        {
          links.map(link => {
            return(
              <li key={link.text} className="list-none text-darkFontBlue-default">
                <Link href={link.href} className="flex flex-col gap-[5px] text-[13px]">
                  {link.text}
                  <div className="active h-[3px] w-[37px] bg-darkBlue-default"/>
                </Link>
              </li>
            )
          })
        }
      </ul>

      <Container fluid className="h-full w-[187px] flex justify-between items-center">
        <Link href="/">
          <Button 
          text="Login"
          />
        </Link>

        <Link href="/">
          <Button 
          text="Sign up"
          bg
          />
        </Link>
      </Container>
    </nav>
  )
}

export function LoggedInNav() {
  return (
    <nav>
      <Container className={`${navClasses}`}>
        <Link href="/">
          
        </Link>
      </Container>
    </nav>
  )
}