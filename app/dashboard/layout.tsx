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
      <div  className="flex min-h-[100vh] w-[99.8vw] relative">
        <aside className="h-fit w-fit hidden lg:block z-[50]">
            <Sidebar/>
        </aside>

        <section className="grow min-h-screen max-h-screen bg-lightGreyBg-default pt-[80px] lg:pt-0 px-[10px] md:px-[30px] overflow-y-auto">
            <DashboardVacanciesHeader/>
            {children}
        </section>
      </div>
    </>
  )
}
