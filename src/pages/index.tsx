import { type NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import About from "../components/Sections/About";
import Offers from "../components/Sections/Offers";
import Personal from "../components/Sections/Personal";
import Group from "../components/Sections/Group";
import Childrens from "../components/Sections/Childrens";
import Special from "../components/Sections/Special";
import VIP from "../components/Sections/VIP";
import VideoRecordings from "../components/Sections/VideoRecordings";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Главная | Инструктор по горным лыжам</title>
        <meta name="description" content="Инструктор по горным лыжам" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="absolute z-10 h-20 w-full bg-gradient-to-b from-[#2A3061] to-transparent opacity-50 sm:h-52" />
        <nav className="z-20 w-full">
          <ul className="hidden justify-center gap-10 font-bold text-white sm:flex">
            <li>Навигация</li>
            <li>Навигация</li>
            <li>Навигация</li>
          </ul>
        </nav>
        <div className="absolute h-[70vh] w-screen select-none lg:h-[90vh] 2xl:h-[90vh]">
          <Image
            src="/homepageHead1.jpg"
            alt="Инструктор на склоне"
            fill
            priority
            draggable="false"
            className="object-cover object-top"
          />
        </div>
        <div
          id="containerElement"
          className="absolute z-10 mt-[55vh] flex flex-col lg:mt-[70vh] xl:mt-[80vh] 2xl:mt-[80vh]"
        >
          <div className="h-0 w-0 border-l-[100vw] border-t-[10vh] border-t-transparent border-l-blue-2" />
          <div className="flex h-[20vh] items-center justify-center bg-blue-2 px-5">
            <h1 className="translate-y-[-8px] text-center font-h text-3xl font-bold text-white xl:text-4xl 2xl:text-5xl">
              Горнолыжный <br />
              Инструктор
            </h1>
            <div className="w-[15%]" />
          </div>
          <div className="h-0 w-0 border-r-[100vw] border-b-[5vh] border-b-transparent border-r-blue-2" />

          <About />
          <Offers />

          <div className="relative h-[40vh] w-screen">
            <Image
              src="/mountain.jpg"
              alt="Горы"
              fill
              className="object-cover object-center"
            />
          </div>

          <Personal />
          <Group />
          <Childrens />
          <Special />
          <VIP />
          <VideoRecordings />
          <div className="relative h-[60vh] w-[100vw]">
            <Image
              src="/mountains2.jpg"
              alt="Горы"
              fill
              className="object-cover object-top"
            />
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
