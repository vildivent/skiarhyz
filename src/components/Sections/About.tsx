import Image from "next/image";
import TextCard from "../TextCard";

const About = () => {
  return (
    <section className="flex flex-col gap-5 px-5 pt-5 lg:px-10 2xl:px-32">
      <h2 className="text-center font-h text-2xl font-bold text-blue-4 xl:text-3xl 2xl:text-4xl">
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
            <li>Член Федерации спортивного туризма КЧР</li>
          </ul>
          <p className="font-bold text-gray-3">
            Стаж катания 17 лет, стаж работы Инструктором 7 лет
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
          <button className="mx-auto bg-orange-1 py-2 px-16 font-bold text-gray-3 hover:bg-orange-400">
            Записаться
          </button>
        </TextCard>
        <div className="relative mt-auto flex h-[90vw] w-[70vw] sm:h-[60vw] sm:w-[40vw]">
          <Image
            src="/hero.png"
            alt="Инструктор портрет"
            fill
            className="object-contain object-bottom"
            sizes="(max-width: 640px) 70vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
