import { useRouter } from "next/router";
import Logo from "../Logo";
import Link from "next/link";
import useNavbarOnScroll from "../../utils/hooks/useNavbarOnScroll";

const Navbar = () => {
  const router = useRouter();
  const { showNavbar, transparentStyle } = useNavbarOnScroll();

  return (
    <nav
      className={`gap-15 fixed top-0 z-20 flex w-full gap-10 transition-all duration-300 ${
        showNavbar ? "h-14" : "pointer-events-none h-0 opacity-0"
      } ${transparentStyle ? "text-white" : "bg-white text-blue-3 shadow-md"}`}
    >
      <Link href="/" className="ml-5 flex items-center sm:ml-20">
        <Logo blue={!transparentStyle} />
      </Link>

      <ul className="hidden items-center gap-5 sm:flex">
        {navLinks.map((navLink) => (
          <li
            key={navLink.id}
            className={`${router.pathname === navLink.id ? "" : ""} `}
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

const navLinks = [
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
