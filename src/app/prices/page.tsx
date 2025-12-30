import type { Metadata } from "next";
import MainLayout from "~/components/layouts/MainLayout";
import { telMain } from "~/shared/config/constants";
import { env } from "~/shared/config/env";
import { headImage2 } from "../../../public";

const title = "Цены | Дмитрий Инструктор по горным лыжам";
const description = "Цены на услуги на текущий сезон";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: `${env.BASE_URL}/prices`,
    phoneNumbers: telMain,
  },
  alternates: {
    canonical: `${env.BASE_URL}/prices`,
  },
};

export default function Prices() {
  return (
    <MainLayout title="Цены" imgSrc={headImage2} alt="Зимние горы">
      <table className="mx-auto my-5 text-center">
        <thead>
          <tr>
            <th colSpan={4} className="bg-white-1">
              Тарифы на услуги инструктора в сезоне{" "}
              <span className="whitespace-nowrap">2025/2026 гг.</span>
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
                <span className="font-bold">Стартовый сезон</span>
                <span>20.11.25 - 25.12.25</span>
              </div>
            </td>
            <td>
              <div className="flex flex-col items-center justify-center">
                <span className="font-bold">Пиковый сезон</span>
                <span>26.12.25 - 11.01.26</span>
                <span>01.02.26 - 15.03.26</span>
              </div>
            </td>
            <td>
              <div className="flex flex-col items-center justify-center">
                <span className="font-bold">Высокий сезон</span>
                <span>12.01.26 - 31.01.26</span>
                <span>16.03.26 - 31.03.26</span>
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
            <td>2 часа</td>
            <td>9700</td>
            <td>12400</td>
            <td>10400</td>
          </tr>
          <tr>
            <td>+1 час</td>
            <td>4850</td>
            <td>6200</td>
            <td>5200</td>
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
            <td>2 часа</td>
            <td>13200</td>
            <td>16900</td>
            <td>14300</td>
          </tr>
          <tr>
            <td>+1 час</td>
            <td>6600</td>
            <td>8450</td>
            <td>7150</td>
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
                <span className="font-normal">с 9:00 до 15:00</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 чел.</td>
            <td>25000</td>
            <td>35000</td>
            <td>30000</td>
          </tr>
          <tr>
            <td>+1 чел.</td>
            <td>5000</td>
            <td>5000</td>
            <td>5000</td>
          </tr>
        </tbody>
      </table>
    </MainLayout>
  );
}
