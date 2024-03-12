import { MainNav, CaretakerNav } from "@/app/ui/components/Nav/Desktop";
import { getSession } from "@auth0/nextjs-auth0";

// checks if logged in and returns appropriate navbar
export default async function Nav() {
  const session = await getSession();

  if (session) return <CaretakerNav/>
  return <MainNav/>
}