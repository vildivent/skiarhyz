import Image from "next/image";
import TextCard from "../TextCard";
import { groupPhoto } from "../../../public";

const Group = () => {
  return (
    <section
      id="group"
      className="flex flex-col items-center justify-center gap-5 bg-white px-5 py-10 lg:flex-row lg:justify-around lg:px-10 2xl:px-32"
    >
      <TextCard type="right">
        <h2 className="text-center font-h text-2xl font-bold text-blue-4 xl:text-3xl 2xl:text-4xl">
          Групповые занятия
        </h2>
        <p>
          Вы проведете время в хорошей компании людей, которые, как и вы, сами
          влюблены в горы. И помните, что не вы первые и не вы последние идете
          этой дорогой. И идти по ней со своими единомышленниками, получая
          радость от своих достижений и преодолевая неудачи, гораздо легче,
          приятнее, да и быстрее.
        </p>
        <p>
          Оптимальное соотношение цены и результата под руководством опытных
          Инструкторов.
        </p>
        <p>
          Количество инструкторов определяется эффективностью и безопасностью
          занятия, за дополнительных инструкторов плата не взымается.
        </p>
      </TextCard>
      <div className="relative flex h-[60vw] w-[90vw] items-center md:h-[47vw] md:w-[70vw] lg:h-[27vw] lg:w-[40vw]">
        <Image
          src={groupPhoto}
          alt="Групповые занятия"
          fill
          className="object-cover object-center shadow-lg"
          sizes="(max-width: 640px) 90vw,
                (max-width: 768px) 70vw,
                 40vw"
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default Group;
