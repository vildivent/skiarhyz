import { type NextPage } from "next";
import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";

const prices: NextPage = () => {
  return (
    <>
      <Head>
        <title>Цены | Инструктор по горным лыжам</title>
        <meta name="description" content="Инструктор по горным лыжам, цены" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout title="Цены" imgSrc="/head-image2.jpg" alt="Зимние горы">
        Цены
      </MainLayout>
    </>
  );
};

export default prices;
