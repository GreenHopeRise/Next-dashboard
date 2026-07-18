import { ReactNode } from "react"

type DashboardLayoutProps = {
    children: ReactNode
}


export default function DashboardLayout({children}:DashboardLayoutProps) {
  return (
    <div className="min-h-screen">
      <aside className="border-b p-4">
        Dashboard Sidebar
      </aside>

      <main className="p-6">
        {children}
      </main>
    </div>
  )
}
