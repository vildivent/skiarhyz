import { type NextPage } from "next";
import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import { headImage3 } from "../../public";

const contacts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Контакты | Инструктор по горным лыжам</title>
        <meta
          name="description"
          content="Инструктор по горным лыжам, контакты"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout title="Контакты" imgSrc={headImage3} alt="Зимний лес">
        Контакты
      </MainLayout>
    </>
  );
};

export default contacts;
