import { NavbarDashboard } from "components/navbar";
import { SidebarDashboard } from "components/sidebar";

export default function LayoutDashboard({ children, menuActive, title }) {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
      <div className="flex items-start justify-between">
        <div className="h-screen hidden lg:block shadow-lg relative w-80">
          <div className="bg-white h-full dark:bg-gray-700">
            <div className="flex items-center justify-start pt-6 ml-8">
              <p className="font-bold dark:text-white text-xl">Admin Company</p>
            </div>
            <SidebarDashboard menuActive={menuActive} />
          </div>
        </div>
        <div className="flex flex-col w-full md:space-y-4">
          <NavbarDashboard title={title} />

          {children}
        </div>
      </div>
    </main>
  );
}
