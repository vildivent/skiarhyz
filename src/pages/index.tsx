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
import MainLayout from "../components/layouts/MainLayout";
import { headImage1, mountainsPhoto1, mountainsPhoto2 } from "../../public";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Главная | Инструктор по горным лыжам</title>
        <meta name="description" content="Инструктор по горным лыжам" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout
        title={
          <>
            <>Горнолыжный</>
            <br />
            <>Инструктор</>
          </>
        }
        imgSrc={headImage1}
        alt="Инструктор на склоне"
      >
        <About />
        <Offers />
        <div className="relative h-[40vh] w-full">
          <Image
            src={mountainsPhoto1}
            alt="Горы"
            fill
            className="object-cover object-center"
            placeholder="blur"
          />
        </div>

        <Personal />
        <Group />
        <Childrens />
        <Special />
        <VIP />
        <VideoRecordings />
        <div className="relative h-[60vh] w-full overflow-hidden">
          <Image
            src={mountainsPhoto2}
            alt="Горы"
            fill
            className="object-cover object-top"
            placeholder="blur"
          />
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
