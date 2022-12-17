import Image from "next/image";
import TextCard from "../TextCard";
import { videoRecordingPhoto } from "../../../public";

const VideoRecordings = () => {
  return (
    <section
      id="video"
      className="flex flex-col items-center justify-center gap-5 bg-gradient-to-b from-blue-2 to-[#5A9AC6] px-5 py-10 lg:flex-row lg:justify-around lg:px-10 2xl:px-32"
    >
      <TextCard type="right">
        <h2 className="text-center font-h text-2xl font-bold text-blue-4 xl:text-3xl 2xl:text-4xl">
          Видео съёмка
        </h2>
        <p>
          Это память Ваших первых шагов успеха или яркие моменты уже отточенной
          техники.
        </p>
        <p>
          Видео съемка делает работу над ошибками более эффективной, используя
          видеоанализ - ключевые моменты тренировки фиксируются на камеру.
        </p>
        <p>Съёмка производится в процессе занятия за отдельную плату.</p>
        <p>
          Вы можете, как забрать отснятый видео материал, так и заказать монтаж
          видео ролика в нашем авторском исполнении. Отдельно можно заказать
          разбор и анализ занятия для выделения основных ошибок и определения
          рекомендаций по их исправлению.
        </p>
      </TextCard>
      <div className="relative flex h-[60vw] w-[90vw] items-center md:h-[47vw] md:w-[70vw] lg:h-[27vw] lg:w-[40vw]">
        <Image
          src={videoRecordingPhoto}
          alt="Видео съёмка"
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

export default VideoRecordings;
