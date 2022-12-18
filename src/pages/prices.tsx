import { type NextPage } from "next";
import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import { headImage2 } from "../../public";

const Prices: NextPage = () => {
  return (
    <>
      <Head>
        <title>Цены | Инструктор по горным лыжам</title>
        <meta name="description" content="Цены на услуги" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout title="Цены" imgSrc={headImage2} alt="Зимние горы">
        <table className="mx-auto my-5 text-center">
          <thead>
            <tr>
              <th colSpan={4} className="bg-white-1">
                Тарифы на услуги инструктора в сезоне{" "}
                <span className="whitespace-nowrap">2022/2023 гг.</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Продолжи&shy;тельность занятия</td>
              <td>
                <div className="flex flex-col items-center justify-center">
                  <span className="font-bold">Низкий сезон</span>
                  <span>01.12.22 – 16.12.22</span>
                  <span>20.03.23 – 15.04.23</span>
                </div>
              </td>
              <td>
                <div className="flex flex-col items-center justify-center">
                  <span className="font-bold">Средний сезон</span>
                  <span>17.12.22 – 23.12.22</span>
                  <span>08.01.23 – 03.02.23</span>
                  <span>13.03.23 – 19.03.23</span>
                </div>
              </td>
              <td>
                <div className="flex flex-col items-center justify-center">
                  <span className="font-bold">Высокий сезон</span>
                  <span>24.12.22 – 07.01.23</span>
                  <span>04.02.23 – 12.03.23</span>
                </div>
              </td>
            </tr>
          </tbody>

          <thead>
            <tr>
              <th colSpan={4} className="bg-white-1">
                Индивидуальные занятия
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,5 часа</td>
              <td>3600</td>
              <td>4200</td>
              <td>4900</td>
            </tr>
            <tr>
              <td>2 часа</td>
              <td>4500</td>
              <td>5300</td>
              <td>6000</td>
            </tr>
            <tr>
              <td colSpan={4}>Абонемент</td>
            </tr>
            <tr>
              <td>5 зан.(по 2 ч.)</td>
              <td>20000</td>
              <td>24000</td>
              <td>27000</td>
            </tr>
            <tr>
              <td>10 зан.(по 2 ч.)</td>
              <td>38000</td>
              <td>46000</td>
              <td>52000</td>
            </tr>
          </tbody>

          <thead>
            <tr>
              <th colSpan={4} className="bg-white-1">
                2 человека
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,5 часа</td>
              <td>2500</td>
              <td>2900</td>
              <td>3100</td>
            </tr>
            <tr>
              <td>2 часа</td>
              <td>3200</td>
              <td>3700</td>
              <td>4000</td>
            </tr>
          </tbody>

          <thead>
            <tr>
              <th colSpan={4} className="bg-white-1">
                Группа 3 и более человек
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,5 часа</td>
              <td>1800</td>
              <td>2100</td>
              <td>2400</td>
            </tr>
            <tr>
              <td>2 часа</td>
              <td>2400</td>
              <td>2800</td>
              <td>3000</td>
            </tr>
            <tr className="bg-white-1">
              <td>
                <span>VIP</span>
                <br />
                <span>с 9:00 до 15:00</span>
                <br />
                <span>1 чел. (2 чел.)</span>
              </td>
              <td>
                <span>12000</span>
                <br />
                <span>(17000)</span>
              </td>
              <td>
                <span>14000</span>
                <br />
                <span>(19000)</span>
              </td>
              <td>
                <span>16000</span>
                <br />
                <span>(21000)</span>
              </td>
            </tr>
          </tbody>
        </table>
      </MainLayout>
    </>
  );
};

export default Prices;
