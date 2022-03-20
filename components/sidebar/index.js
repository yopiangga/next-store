import Link from "next/link";
import { FiHome, FiBox, FiUsers, FiDollarSign } from "react-icons/fi";
import { useState } from "react";

export function SidebarDashboard({ menuActive }) {
  const menu = [
    {
      title: "Dashboard",
      icon: <FiHome />,
      href: "/dashboard",
    },
    {
      title: "Produk",
      icon: <FiBox />,
      href: "/dashboard/products",
    },
    {
      title: "Pengguna",
      icon: <FiUsers />,
      href: "/dashboard/users",
    },
    {
      title: "Transaksi",
      icon: <FiDollarSign />,
      href: "/dashboard/transactions",
    },
  ];

  return (
    <nav className="">
      <div className="relative bg-white dark:bg-gray-800">
        <div className="flex flex-col sm:flex-row sm:justify-around">
          <div className="w-72 h-screen">
            <div className="flex items-center justify-start mx-6 mt-10">
              {/* <img className="h-10" src="/icons/rocket.svg" /> */}
              <span className="text-gray-600 dark:text-gray-300 ml-4 text-2xl font-bold">
                Admin Website
              </span>
            </div>
            <nav className="mt-10 px-6 ">
              {menu?.map((el, idx) => {
                if (parseInt(menuActive) == idx) {
                  return (
                    <Link href={el.href} key={idx}>
                      <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 border-r-2 border-gray-600 dark:border-gray-300 text-gray-800 dark:text-gray-100  bg-gray-100 dark:bg-gray-600">
                        {el.icon}

                        <span className="mx-4 text-lg font-normal">
                          {el.title}
                        </span>
                        <span className="flex-grow text-right"></span>
                      </a>
                    </Link>
                  );
                } else {
                  return (
                    <Link href={el.href} key={idx}>
                      <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400  ">
                        {el.icon}
                        <span className="mx-4 text-lg font-normal">
                          {el.title}
                        </span>
                        <span className="flex-grow text-right"></span>
                      </a>
                    </Link>
                  );
                }
              })}
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}
