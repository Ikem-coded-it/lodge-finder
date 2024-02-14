import Hero from "@/app/ui/Home/Hero";
import { MainNav } from "@/app/ui/Nav/Desktop";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <MainNav/>
      <Hero/>
    </main>
  )
}
