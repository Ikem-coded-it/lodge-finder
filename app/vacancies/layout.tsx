import { ReactNode } from "react";
import Main from "@/app/ui/components/Main";
import type { Metadata } from 'next'
import { MainNav } from "@/app/ui/Nav/Desktop";
import SearchBar from "@/app/ui/vacancies/SearchBar";

export const metadata: Metadata = {
  title: 'Vacancies',
}

export default function Layout({
  children
}:{
  children: ReactNode
}) {
  return (
    <Main>
      <MainNav/>
      <SearchBar/>
      {children}
    </Main>
  )
}