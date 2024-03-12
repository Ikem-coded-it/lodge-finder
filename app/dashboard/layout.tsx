import type { Metadata } from 'next'
import Sidebar from '../ui/components/Dashboard/sidebar';
import HideNavInDesktop from '../ui/components/Dashboard/hide-menu';
import { getSession } from "@auth0/nextjs-auth0";
import DashboardVacanciesHeader from '../ui/components/Dashboard/vacancies/header';

export const metadata: Metadata = {
  title: "Your dashboard"
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  try {
    const session = await getSession();
    console.log(session)
  } catch (error: any) {
    console.log(error)
  }

  return (
    <>
      <HideNavInDesktop/>
      <div  className="flex min-h-[100vh] w-[99.8vw]">
        <aside className="h-fit w-fit hidden lg:block">
            <Sidebar/>
        </aside>

        <section className="grow h-full bg-lightGreyBg-default relative pt-[80px]">
            <DashboardVacanciesHeader/>
            {children}
        </section>
      </div>
    </>
  )
}
