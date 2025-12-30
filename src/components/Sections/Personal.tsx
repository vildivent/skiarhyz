import Image from "next/image";
import TextCard from "../TextCard";
import { individualPhoto } from "../../../public";

const Personal = () => {
  return (
    <section
      id="personal"
      className="from-blue-1 flex flex-col-reverse items-center justify-center gap-5 bg-linear-to-b to-white px-5 py-10 lg:flex-row lg:justify-around lg:px-10 2xl:px-32"
    >
      <div className="relative flex h-[60vw] w-[90vw] items-center md:h-[47vw] md:w-[70vw] lg:h-[27vw] lg:w-[40vw]">
        <Image
          src={individualPhoto}
          alt="Индивидуальные занятия"
          fill
          className="object-cover object-center shadow-lg"
          sizes="(max-width: 640px) 90vw,
                (max-width: 768px) 70vw,
                 40vw"
          placeholder="blur"
        />
      </div>
      <TextCard type="left">
        <h2 className="font-h text-blue-4 text-center text-2xl font-bold xl:text-3xl 2xl:text-4xl">
          Индивидуальные занятия
        </h2>
        <p>
          Индивидуальный метод самый простой, понятный и самый распространенный.
          Вы занимаетесь с инструктором один на один. Инструктор может
          использовать контактные методы работы - страховать, ловить, держать,
          может применять персональные способы демонстрации и объяснения и
          ориентирован только на вас.
        </p>
        <p>
          Персональный подход к обучению и максимальное погружение в процесс
          обучения, как для новичков, так и для прогрессирующих райдеров.
        </p>
      </TextCard>
    </section>
  );
};

export default Personal;
