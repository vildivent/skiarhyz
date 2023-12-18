import { type NextPage } from "next";
import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import { headImage2 } from "../../public";
import { imgUrl } from ".";

const Prices: NextPage = () => {
  return (
    <>
      <Head>
        <title>Цены | Дмитрий Инструктор по горным лыжам</title>
        <meta name="description" content="Цены" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="image" content={imgUrl} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Цены | Дмитрий Инструктор по горным лыжам"
        />
        <meta property="og:description" content="Цены" />
        <meta property="og:image" itemProp="image" content={imgUrl} />
      </Head>

      <MainLayout title="Цены" imgSrc={headImage2} alt="Зимние горы">
        <table className="mx-auto my-5 text-center">
          <thead>
            <tr>
              <th colSpan={4} className="bg-white-1">
                Тарифы на услуги инструктора в сезоне{" "}
                <span className="whitespace-nowrap">2023/2024 гг.</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={2}>Продолжи&shy;тельность занятия</td>
              <td colSpan={3}>Стоимость за 1 человека в руб.</td>
            </tr>
            <tr>
              <td>
                <div className="flex flex-col items-center justify-center">
                  <span className="font-bold">Низкий сезон</span>
                  <span>до 15.12.23</span>
                  <span>после 01.04.24</span>
                </div>
              </td>
              <td>
                <div className="flex flex-col items-center justify-center">
                  <span className="font-bold">Средний сезон</span>
                  <span>16.12.23 - 29.12.23</span>
                  <span>09.01.24 - 09.02.24</span>
                  <span>16.03.24 - 31.03.24</span>
                </div>
              </td>
              <td>
                <div className="flex flex-col items-center justify-center">
                  <span className="font-bold">Высокий сезон</span>
                  <span>30.12.23 - 08.01.24</span>
                  <span>10.02.24 - 15.03.24</span>
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
              <td>1 час</td>
              <td>3500</td>
              <td>4000</td>
              <td>4500</td>
            </tr>
            <tr>
              <td>1,5 часа</td>
              <td>4500</td>
              <td>5000</td>
              <td>5500</td>
            </tr>
            <tr>
              <td>2 часа</td>
              <td>5500</td>
              <td>6000</td>
              <td>6500</td>
            </tr>
            <tr>
              <td colSpan={4}>Абонемент</td>
            </tr>
            <tr>
              <td>3 зан.(по 2 ч.)</td>
              <td>15500</td>
              <td>17000</td>
              <td>18500</td>
            </tr>
            <tr>
              <td>5 зан.(по 2 ч.)</td>
              <td>25000</td>
              <td>27000</td>
              <td>29000</td>
            </tr>
            <tr>
              <td>10 зан.(по 2 ч.)</td>
              <td>46000</td>
              <td>51000</td>
              <td>55000</td>
            </tr>
          </tbody>

          <thead>
            <tr>
              <th colSpan={4} className="bg-white-1">
                Групповые занятия
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4}>2 человека</td>
            </tr>
            <tr>
              <td>1 час</td>
              <td>2400</td>
              <td>2800</td>
              <td>3100</td>
            </tr>
            <tr>
              <td>1,5 часа</td>
              <td>3100</td>
              <td>3500</td>
              <td>3800</td>
            </tr>
            <tr>
              <td>2 часа</td>
              <td>3800</td>
              <td>4200</td>
              <td>4500</td>
            </tr>
            <tr>
              <td colSpan={4}>Группа 3-5 чел.</td>
            </tr>
            <tr>
              <td>1,5 часа</td>
              <td>2300</td>
              <td>2600</td>
              <td>2800</td>
            </tr>
            <tr>
              <td>2 часа</td>
              <td>2800</td>
              <td>3100</td>
              <td>3300</td>
            </tr>
            <tr>
              <td colSpan={4}>Группа 6-12 чел. (2 инструктора)</td>
            </tr>
            <tr>
              <td>2 часа</td>
              <td>3800</td>
              <td>4200</td>
              <td>4500</td>
            </tr>
          </tbody>

          <thead>
            <tr>
              <th colSpan={4} className="bg-white-1">
                <div className="flex flex-col">
                  <span>
                    Неподготовленный склон, бугры,{" "}
                    <span className="whitespace-nowrap">разбитый склон</span>
                  </span>
                  <span className="font-normal italic">
                    обучение инструктором повышенной категории
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4}>Индивидуальные занятия</td>
            </tr>
            <tr>
              <td>1 час</td>
              <td>4000</td>
              <td>4500</td>
              <td>5000</td>
            </tr>
            <tr>
              <td>1,5 часа</td>
              <td>5000</td>
              <td>5500</td>
              <td>6000</td>
            </tr>
            <tr>
              <td>2 часа</td>
              <td>6000</td>
              <td>6500</td>
              <td>7000</td>
            </tr>
            <tr>
              <td colSpan={4}>Группа 2-5 чел.</td>
            </tr>
            <tr>
              <td>1,5 часа</td>
              <td>3500</td>
              <td>3800</td>
              <td>4200</td>
            </tr>
            <tr>
              <td>2 часа</td>
              <td>4200</td>
              <td>4500</td>
              <td>4900</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th colSpan={4} className="bg-white-1">
                <div className="flex flex-col">
                  <span>Фристайл</span>
                  <span className="font-normal italic">
                    обучение инструктором специальной категории
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4}>Индивидуальные занятия</td>
            </tr>
            <tr>
              <td>1 час</td>
              <td>4000</td>
              <td>4500</td>
              <td>5000</td>
            </tr>
            <tr>
              <td>1,5 часа</td>
              <td>5000</td>
              <td>5500</td>
              <td>6000</td>
            </tr>
            <tr>
              <td>2 часа</td>
              <td>6000</td>
              <td>6500</td>
              <td>7000</td>
            </tr>
            <tr>
              <td colSpan={4}>Группа 2-5 чел.</td>
            </tr>
            <tr>
              <td>1,5 часа</td>
              <td>3500</td>
              <td>3800</td>
              <td>4200</td>
            </tr>
            <tr>
              <td>2 часа</td>
              <td>4200</td>
              <td>4500</td>
              <td>4900</td>
            </tr>
          </tbody>

          <thead>
            <tr>
              <th colSpan={4} className="bg-white-1">
                <div className="flex flex-col">
                  <span>&quot;CAMP&quot; (Курсовые занятия)</span>
                  <span className="font-normal italic">Группа 5-10 чел.</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3 дня</td>
              <td>15000</td>
              <td>17000</td>
              <td>20000</td>
            </tr>
            <tr>
              <td>5 дней</td>
              <td>25000</td>
              <td>27000</td>
              <td>30000</td>
            </tr>
          </tbody>

          <thead>
            <tr>
              <th colSpan={4} className="bg-white-1">
                <div className="flex flex-col">
                  <span>VIP (День на склоне)</span>
                  <span className="font-normal italic">
                    Сопровождение и обучение инструктором повышенной категории
                  </span>
                  <span className="font-normal">
                    с 9:00 до 15:00 или с 10:00 до 16:00
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 чел.</td>
              <td>15500</td>
              <td>17000</td>
              <td>18500</td>
            </tr>
            <tr>
              <td>2 чел.</td>
              <td>21500</td>
              <td>24000</td>
              <td>25500</td>
            </tr>
            <tr>
              <td>3 чел.</td>
              <td>24000</td>
              <td>26500</td>
              <td>28000</td>
            </tr>
          </tbody>

          <thead>
            <tr>
              <th colSpan={4} className="bg-white-1">
                <div className="flex flex-col">
                  <span>&quot;Корпоратив&quot;</span>
                  <span className="font-normal italic">
                    Организация и обслуживание спортивно-развлекательных
                    мероприятий
                  </span>
                  <span className="font-normal italic">(от 10-ти чел.)</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>6 часов</td>
              <td>От 140000</td>
              <td>От 160000</td>
              <td>От 170000</td>
            </tr>
          </tbody>

          <thead>
            <tr>
              <th colSpan={4} className="bg-white-1">
                <div className="flex flex-col">
                  <span>&quot;Теория&quot;</span>
                  <span className="font-normal italic">
                    Проведение теоретических занятий
                  </span>
                  <span className="font-normal italic">
                    (от 5-ти чел., 45 мин.)
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 занятие</td>
              <td>800</td>
              <td>1000</td>
              <td>1300</td>
            </tr>
            <tr>
              <td>2 занятия</td>
              <td>1500</td>
              <td>1900</td>
              <td>2400</td>
            </tr>
            <tr>
              <td>3 занятия</td>
              <td>2000</td>
              <td>2700</td>
              <td>3500</td>
            </tr>
          </tbody>

          <thead>
            <tr>
              <th colSpan={4} className="bg-white-1">
                Видеоразбор
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Личное присутствие</td>
              <td>2000</td>
              <td>3000</td>
              <td>4000</td>
            </tr>
            <tr>
              <td>Удалённо - online</td>
              <td>1000</td>
              <td>1500</td>
              <td>2000</td>
            </tr>
            <tr>
              <td>Удалённо - offline</td>
              <td>700</td>
              <td>1000</td>
              <td>1500</td>
            </tr>
          </tbody>
        </table>
      </MainLayout>
    </>
  );
};

export default Prices;
