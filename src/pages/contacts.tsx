import { type NextPage } from "next";
import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";

const contacts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Контакты | Инструктор по горным лыжам</title>
        <meta name="description" content="Инструктор по горным лыжам, цены" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout title="Контакты" imgSrc="/head-image3.jpg" alt="Зимний лес">
        Контакты
      </MainLayout>
    </>
  );
};

export default contacts;
