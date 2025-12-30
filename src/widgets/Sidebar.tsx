"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Dispatch, type SetStateAction } from "react";
import { IoClose } from "react-icons/io5";
import { navLinks } from "./Navbar";

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  return (
    <div
      className={`text-blue-3 fixed top-0 left-0 z-30 ${
        sidebarOpen ? "h-screen w-screen" : "pointer-events-none h-0 w-0"
      }`}
    >
      <div
        className="bg-gray-5 z-0 h-full w-full opacity-50"
        onClick={() => setSidebarOpen(false)}
      />
      <div
        className={`fixed top-0 left-0 z-1 flex flex-col items-end bg-white pb-10 transition-all duration-300 ${
          sidebarOpen ? "" : "-translate-x-60"
        }`}
      >
        <button
          name="close"
          onClick={() => setSidebarOpen(false)}
          className="p-3"
        >
          <IoClose className="hover:text-gray-2 text-3xl transition-transform duration-300 hover:rotate-90" />
        </button>

        <ul className="flex flex-col">
          {navLinks.map((navLink) => (
            <Link href={navLink.id} key={navLink.id}>
              <li
                className={`${
                  pathname === navLink.id ? "text-gray-2" : ""
                } min-w-48 p-3 font-bold hover:bg-gray-100`}
              >
                <span className="">{navLink.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
