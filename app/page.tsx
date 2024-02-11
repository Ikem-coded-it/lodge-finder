import Image from 'next/image';
import Hero from "@/app/ui/Home/Hero";
import { LoggedOutNav } from "@/app/ui/Nav";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <LoggedOutNav/>
      <Hero/>
    </main>
  )
}
