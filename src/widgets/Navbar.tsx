"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Dispatch, type SetStateAction } from "react";
import { IoIosArrowDown } from "react-icons/io";
import useNavbarOnScroll from "../shared/lib/useNavbarOnScroll";
import Logo from "../components/Logo";

type NavbarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const Navbar = ({ sidebarOpen, setSidebarOpen }: NavbarProps) => {
  const pathname = usePathname();
  const { transparentStyle } = useNavbarOnScroll();
  const showNavbar = true;

  return (
    <nav
      className={`fixed top-0 z-20 flex w-full gap-10 backdrop-blur-md transition-all duration-300 ${
        showNavbar ? "" : "pointer-events-none -translate-y-12 opacity-50"
      } ${transparentStyle ? "text-white" : "text-blue-3 bg-white/75 shadow-md"}`}
    >
      <Link href="/" className="ml-5 flex items-center sm:ml-20">
        <Logo blue={!transparentStyle} />
      </Link>

      <button
        name="menu"
        onClick={() => setSidebarOpen((state) => !state)}
        className="p-3"
      >
        <IoIosArrowDown
          className={`text-3xl transition-transform duration-300 ${
            sidebarOpen ? "rotate-90" : ""
          }`}
        />
      </button>

      <ul className="hidden items-center gap-5 sm:flex">
        {navLinks.map((navLink) => (
          <li
            key={navLink.id}
            className={`${
              pathname === navLink.id
                ? `${transparentStyle ? "text-gray-1" : "text-gray-2"}`
                : ""
            } ${transparentStyle ? "hover:text-gray-1" : "hover:text-gray-2"}`}
          >
            <Link href={navLink.id}>
              <span className="p-2 font-bold">{navLink.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

export const navLinks = [
  {
    id: "/",
    title: "Главная",
  },
  {
    id: "/prices",
    title: "Цены",
  },
  {
    id: "/contacts",
    title: "Контакты",
  },
];
