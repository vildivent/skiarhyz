import Image from "next/image";
import TextCard from "../TextCard";
import { vipPhoto } from "../../../public";

const VIP = () => {
  return (
    <section
      id="vip"
      className="relative flex flex-col-reverse items-center justify-center gap-5 bg-gradient-to-r from-blue-1 to-blue-3 px-5 py-10 lg:flex-row lg:justify-around lg:px-10 2xl:px-32"
    >
      <div className="absolute z-[0] h-full w-full select-none">
        <Image
          src="/forest-bg.jpg"
          alt="Инструктор на склоне"
          fill
          priority
          draggable="false"
          className="object-cover object-center"
        />
      </div>
      <div className="relative z-[1] flex h-[60vw] w-[90vw] items-center md:h-[47vw] md:w-[70vw] lg:h-[27vw] lg:w-[40vw]">
        <Image
          src={vipPhoto}
          alt="VIP день"
          fill
          className="object-contain object-center"
          sizes="(max-width: 640px) 90vw,
        (max-width: 768px) 70vw,
         40vw"
          placeholder="blur"
        />
      </div>
      <TextCard type="left">
        <h2 className="text-center font-h text-2xl font-bold text-blue-4 xl:text-3xl 2xl:text-4xl">
          VIP день
        </h2>
        <p>
          Помогу не только чувствовать себя увереннее на трассах и повысить свое
          мастерство, но и расскажу обо всех трассах, их особенностях, сложных
          участках, объясню, как подобрать качественное оборудование,
          соответствующее вашему уровню, покажу наш курорт и расскажу, где что
          находится, помогу сделать незабываемые фотографии из самых эффектных
          мест, сделаю видео съёмку вашего прогресса.
        </p>
      </TextCard>
    </section>
  );
};

export default VIP;
