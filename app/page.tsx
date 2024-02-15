import Hero from "@/app/ui/Home/Hero";
import { MainNav } from "@/app/ui/Nav/Desktop";
import Hot from "@/app/ui/Home/Hot"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <MainNav/>
      <Hero/>
      <Hot/>
    </main>
  )
}
