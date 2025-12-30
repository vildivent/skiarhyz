import { formatDistance, formatDistanceStrict } from "date-fns";
import { ru } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";
import { heroPhoto } from "../../../public";
import TextCard from "../TextCard";

const About = () => {
  return (
    <section className="flex flex-col gap-5 px-5 pt-5 lg:px-10 2xl:px-32">
      <h2 className="font-h text-blue-4 text-center text-2xl font-bold xl:text-3xl 2xl:text-4xl">
        Дмитрий
      </h2>
      <div className="flex flex-col items-center justify-start lg:flex-row lg:justify-around">
        <TextCard type="right" margin="lg:mb-10">
          <ul className="flex list-disc flex-col gap-2">
            <li>
              Профессиональный инструктор международной категории «В»
              <br />
              по горным лыжам (НЛИ/ISIA)
            </li>
            <li>
              Тренер-преподаватель
              <br />
              (высшее педагогическое государственное образование)
            </li>
            <li>
              Инструктор-методист горнолыжного туризма и сноубординга
              <br />
              (высшее педагогическое государственное образование)
            </li>
            <li>
              Инструктор по горнолыжному спорту (Высшее образование "Физическая
              культура и спорт")
            </li>
          </ul>
          <p className="text-gray-3 font-bold">
            Стаж катания{" "}
            {formatDistanceStrict(new Date(2005, 12, 1), new Date(), {
              locale: ru,
            })}
            , стаж работы Инструктором{" "}
            {formatDistanceStrict(new Date(2018, 12, 1), new Date(), {
              locale: ru,
            })}
          </p>
          <p>
            Предоставляю услуги по обучению горным лыжам взрослых и детей,
            индивидуально и в группах, с любым уровнем катания профессионально и
            безопасно. Методика соответствует зарубежным школам ISIA.
          </p>
          <p>
            Основываясь на разработках коллег из Австрии, постоянно адаптирую
            методику обучения к нашей российской действительности.
          </p>
          <Link href="/contacts" className="mx-auto">
            <button className="bg-orange-1 text-gray-3 px-16 py-2 font-bold hover:bg-orange-400">
              Записаться
            </button>
          </Link>
        </TextCard>
        <div className="relative mt-auto flex h-[90vw] w-[70vw] sm:h-[60vw] sm:w-[40vw]">
          <Image
            src={heroPhoto}
            alt="Инструктор портрет"
            fill
            priority
            className="object-contain object-bottom"
            sizes="(max-width: 640px) 70vw, 40vw"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
