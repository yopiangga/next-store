import { NavbarDashboard } from "components/navbar";
import { SidebarDashboard } from "components/sidebar";

export default function LayoutDashboard({ children, menuActive, title }) {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
      <div className="flex items-start justify-between">
        <div className="h-screen md:hidden lg:block shadow-lg relative w-80">
          <SidebarDashboard menuActive={menuActive} />
        </div>
        <div className="flex flex-col w-full md:space-y-4">
          <NavbarDashboard title={title} />

          {children}
        </div>
      </div>
    </main>
  );
}
