import type { Metadata } from 'next'
import Sidebar from '../ui/components/Dashboard/sidebar';
import HideNavInDesktop from '../ui/components/Dashboard/hide-menu';

export const metadata: Metadata = {
  title: "Your dashboard"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <HideNavInDesktop/>
      <div  className="flex min-h-[100vh] w-[99.8vw]">
        <aside className="h-fit w-fit hidden lg:block">
            <Sidebar/>
        </aside>

        <section className="grow h-full bg-lightGreyBg-default">
            {children}
        </section>
      </div>
    </>
  )
}
