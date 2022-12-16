import Image from "next/image";
import TextCard from "../TextCard";

const Personal = () => {
  return (
    <section
      id="personal"
      className="flex flex-col-reverse items-center justify-center gap-5 bg-gradient-to-b from-blue-1 to-white px-5 py-10 lg:flex-row lg:justify-around lg:px-10 2xl:px-32"
    >
      <div className="relative flex h-[60vw] w-[90vw] items-center md:h-[47vw] md:w-[70vw] lg:h-[27vw] lg:w-[40vw]">
        <Image
          src="/individual.png"
          alt="Индивидуальные занятия"
          fill
          className="object-contain object-center"
          sizes="(max-width: 640px) 90vw,
                (max-width: 768px) 70vw,
                 40vw"
        />
      </div>
      <TextCard type="left">
        <h2 className="text-center font-h text-2xl font-bold text-blue-4 xl:text-3xl 2xl:text-4xl">
          Индивидуальные занятия
        </h2>
        <p>
          Персональный подход к обучению и максимальное погружение в процесс
          обучения, как для новичков, так и для прогрессирующих райдеров.
        </p>
        <p>
          Базовая техника - с помощью которой вы сможете легко и с удовольствием
          кататься на трассах начального уровня.
        </p>
        <p>
          {`Продвинутая техника - вы научитесь свободно перемещаться по
                склону, невзирая на его фактическое состояние ("вельвет",
                свеженакопанные другими лыжниками бугры, лед, "расколбас" и
                пр.).`}
        </p>
      </TextCard>
    </section>
  );
};

export default Personal;
