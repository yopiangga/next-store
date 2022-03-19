import Link from "next/link";
import { FiHome, FiBox, FiUsers, FiDollarSign } from "react-icons/fi";
import { useState } from "react";

export function SidebarDashboard({ menuActive }) {
  //   const [menuActive, setMenuActive] = useState(0);

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
    <nav className="mt-6">
      <div>
        {menu?.map((el, idx) => {
          return (
            <Link href={el.href} key={idx}>
              <a
                className={`w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4 ${
                  parseInt(menuActive) == idx
                    ? "border-purple-500"
                    : "border-transaparent"
                } `}
              >
                {el.icon}
                <span className="mx-2 text-sm font-normal">{el.title}</span>
              </a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
