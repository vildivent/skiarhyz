import { useRouter } from "next/router";
import Logo from "../Logo";
import Link from "next/link";
import useNavbarOnScroll from "../../utils/hooks/useNavbarOnScroll";
import { IoIosArrowDown } from "react-icons/io";
import { type Dispatch, type SetStateAction } from "react";

type NavbarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const Navbar = ({ sidebarOpen, setSidebarOpen }: NavbarProps) => {
  const router = useRouter();
  const { showNavbar, transparentStyle } = useNavbarOnScroll();

  return (
    <nav
      className={`gap-15 fixed top-0 z-20 flex w-full gap-10 transition-all duration-300 ${
        showNavbar ? "" : "pointer-events-none translate-y-[-3rem] opacity-0"
      } ${transparentStyle ? "text-white" : "bg-white text-blue-3 shadow-md"}`}
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
              router.pathname === navLink.id
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
