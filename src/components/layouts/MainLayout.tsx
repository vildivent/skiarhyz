import { type ReactNode, useState, useEffect } from "react";
import Footer from "../Footer";
import Image from "next/image";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

type MainLayoutProps = {
  children: ReactNode;
  imgSrc: string;
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
          />
        </div>

        <div className="absolute z-10 mt-[55vh] flex w-full flex-col lg:mt-[70vh] xl:mt-[80vh] 2xl:mt-[80vh]">
          <div
            className="flex h-[35vh] items-center justify-center bg-blue-3 px-5"
            style={{
              clipPath: "polygon(0 0, 0 86%, 100% 100%, 100% 29%)",
            }}
          >
            <h1 className=" text-center font-h text-3xl font-bold text-white xl:text-4xl 2xl:text-5xl">
              {title}
            </h1>
            <div className="w-[15%]" />
          </div>
          {children}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
