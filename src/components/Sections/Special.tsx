import Image from "next/image";
import TextCard from "../TextCard";
import { specialPhoto } from "../../../public";

const Special = () => {
  return (
    <section
      id="special"
      className="relative flex flex-col items-center justify-center gap-5 bg-white px-5 py-10 lg:flex-row lg:justify-around lg:px-10 2xl:px-32"
    >
      <div className="absolute z-[0] h-full w-full select-none">
        <Image
          src={specialPhoto}
          alt="Лыжник в лесу"
          fill
          draggable="false"
          className="object-cover object-top"
          placeholder="blur"
        />
      </div>
      <TextCard type="right">
        <h2 className="text-center font-h text-2xl font-bold text-blue-4 xl:text-3xl 2xl:text-4xl">
          Специальный Курс
        </h2>
        <p>
          Уникальная последовательная методика обучения подобранная и
          отработанная за годы преподавания, основанная на Австрийской методике
          обучения (ISIA) и методике Российской школы инструкторов (НЛИ).
        </p>
        <p>
          Это увлекательное время в кругу единомышленников и эффективный способ
          познания техники.
        </p>
        <p>
          Ежедневно 4 часа на склоне с перерывом на обед (2ч. занятий – перерыв
          1 час – заключительные 2ч. занятий) и вечерний семинар или видео
          разбор полетов.
        </p>
        <p>
          Для того, чтобы работа над ошибками была еще эффективнее, я использую
          видеоанализ - ключевые моменты тренировки фиксируются на камеру для
          последующего просмотра, разбора ошибок и выделения правильно освоенных
          элементов катания.
        </p>
        <p>
          После этой программы вы не превратитесь в профессиональных
          спортсменов, но начнете получать настоящее удовольствие от катания.
        </p>
      </TextCard>
      <div className="relative hidden h-[60vw] w-[90vw] items-center md:h-[47vw] md:w-[70vw] lg:flex lg:h-[27vw] lg:w-[40vw]"></div>
    </section>
  );
};

export default Special;
