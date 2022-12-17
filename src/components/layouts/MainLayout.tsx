import { type ReactNode, useState, useEffect } from "react";
import Footer from "../Footer";
import Image, { type StaticImageData } from "next/image";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ScrollToTop from "react-scroll-to-top";
import { IoIosArrowUp } from "react-icons/io";

type MainLayoutProps = {
  children: ReactNode;
  imgSrc: string | StaticImageData;
  alt: string;
  title: ReactNode;
};

const MainLayout = ({ children, imgSrc, alt, title }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = sidebarOpen ? "hidden" : "scroll";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [sidebarOpen]);

  return (
    <>
      <main className="relative flex min-h-screen w-full flex-col ">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="absolute z-10 h-20 w-full bg-gradient-to-b from-[#2A3061] to-transparent opacity-50 sm:h-52" />
        <div className="absolute h-[70vh] w-full select-none lg:h-[90vh] 2xl:h-[90vh]">
          <Image
            src={imgSrc}
            alt={alt}
            fill
            priority
            draggable="false"
            className="object-cover object-center"
            placeholder="blur"
          />
        </div>

        <div className="absolute z-10 mt-[55vh] flex w-full flex-col lg:mt-[70vh] xl:mt-[80vh] 2xl:mt-[80vh]">
          <div
            className="relative flex h-[35vh] items-center justify-center bg-blue-3 px-5"
            style={{
              clipPath: "polygon(0 0, 0 86%, 100% 100%, 100% 29%)",
            }}
          >
            <h1 className="relative z-[1] text-center font-h text-3xl font-bold text-white xl:text-4xl 2xl:text-5xl">
              {title}
            </h1>
            <div
              className="absolute bottom-0 z-0 h-[35vw] w-full bg-white sm:h-[20vw]"
              style={{
                clipPath:
                  "polygon(100% 100%, 85% 65%, 73% 85%, 65% 70%, 50% 100%)",
              }}
            />
            <div className="w-[15%]" />
          </div>
          {children}
          <Footer />
          <ScrollToTop
            style={{ backgroundColor: "#cccccc" }}
            component={
              <span className="flex items-center justify-center text-3xl">
                <IoIosArrowUp />
              </span>
            }
            smooth
          />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
