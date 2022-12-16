import Image from "next/image";
import TextCard from "../TextCard";

const Childrens = () => {
  return (
    <section
      id="childrens"
      className="flex flex-col-reverse items-center justify-center gap-5 bg-gradient-to-r from-blue-1 to-blue-3 px-5 py-10 lg:flex-row lg:justify-around lg:px-10 2xl:px-32"
    >
      <div className="relative flex h-[60vw] w-[90vw] items-center md:h-[47vw] md:w-[70vw] lg:h-[27vw] lg:w-[40vw]">
        <Image
          src="/childrens.jpg"
          alt="Детские занятия"
          fill
          className="object-contain object-center"
          sizes="(max-width: 640px) 90vw,
                (max-width: 768px) 70vw,
                 40vw"
        />
      </div>
      <TextCard type="left">
        <h2 className="text-center font-h text-2xl font-bold text-blue-4 xl:text-3xl 2xl:text-4xl">
          Детские занятия
        </h2>
        <p>
          Обучаю детей не только технично спускаться по склонам, но и делать это
          безопасно, соблюдая все необходимые правила как на склонах, так и на
          подъёмниках.
        </p>
        <p>
          Во время занятий помогают ребятам получать удовольствие от катания и
          радоваться своим маленьким победам, которых у каждого набирается по
          нескольку в день.
        </p>
        <p>
          Помимо большого опыта работы с детьми, имею и специальное
          педагогическое образование.
        </p>
        <p>
          Помогаю заложить правильную базу с малых лет для чемпионства в будущем
          или полноценного физического развития ребенка.
        </p>
      </TextCard>
    </section>
  );
};

export default Childrens;
