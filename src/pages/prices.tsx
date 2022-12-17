import { type NextPage } from "next";
import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import { headImage2 } from "../../public";

const prices: NextPage = () => {
  return (
    <>
      <Head>
        <title>Цены | Инструктор по горным лыжам</title>
        <meta name="description" content="Инструктор по горным лыжам, цены" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout title="Цены" imgSrc={headImage2} alt="Зимние горы">
        Цены
      </MainLayout>
    </>
  );
};

export default prices;
