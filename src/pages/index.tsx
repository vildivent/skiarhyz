import { type NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Главная | Инструктор по горным лыжам</title>
        <meta name="description" content="Инструктор по горным лыжам" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="absolute z-10 h-20 w-full bg-gradient-to-b from-[#2A3061] to-transparent opacity-50 sm:h-52" />
        <nav className="z-20 w-full">
          <ul className="hidden justify-center gap-10 font-bold text-white sm:flex">
            <li>Навигация</li>
            <li>Навигация</li>
            <li>Навигация</li>
            <li>Навигация</li>
            <li className="hidden sm:block">Навигация</li>
            <li className="hidden md:block">Навигация</li>
            <li className="hidden lg:block">Навигация</li>
          </ul>
        </nav>
        <div className="absolute h-[70vh] w-screen lg:h-[90vh] 2xl:h-[90vh]">
          <Image
            src="/homepageHead1.jpg"
            alt="Инструктор на склоне"
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="absolute z-10 mt-[55vh] flex flex-col lg:mt-[70vh] xl:mt-[80vh] 2xl:mt-[80vh]">
          <div className="h-0 w-0 border-l-[100vw] border-t-[10vh] border-t-transparent border-l-blue-2" />
          <div className="flex h-[20vh] w-full items-center justify-center bg-blue-2 px-5">
            <h1 className="text-center font-h text-3xl text-white xl:text-4xl 2xl:text-5xl">
              Лыжный Инструктор
            </h1>
            <div className="w-[15%]" />
          </div>
          <div className="h-0 w-0 border-r-[100vw] border-b-[5vh] border-b-transparent border-r-blue-2" />
          <section className="flex flex-col gap-5 px-5 pt-5">
            <h2 className="relative z-10 text-center font-h text-2xl text-blue-4 xl:text-3xl 2xl:text-4xl">
              Какой-нибудь заголовок
            </h2>
            <div className="flex flex-col items-center lg:flex-row lg:justify-around">
              <div className="relative mb-5 flex w-[90vw] flex-col justify-center gap-5 bg-white-1 px-5 py-16 text-justify sm:px-16 sm:py-24 lg:w-[50vw]">
                <div className="absolute left-0 top-0 h-0 w-0 border-r-[90vw] border-b-[4vh] border-b-transparent border-r-white lg:border-r-[50vw]" />
                <div className="absolute left-0 bottom-0 h-0 w-0 border-r-[90vw] border-t-[6vh] border-t-transparent border-r-white lg:border-r-[50vw]" />

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris feugiat sodales elit a finibus. Praesent sit amet dolor
                  at neque rhoncus iaculis ut non risus. Vivamus porta sed
                  mauris sed suscipit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris feugiat sodales elit a finibus. Praesent sit amet dolor
                  at neque rhoncus iaculis ut non risus. Vivamus porta sed
                  mauris sed suscipit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris feugiat sodales elit a finibus. Praesent sit amet dolor
                  at neque rhoncus iaculis ut non risus. Vivamus porta sed
                  mauris sed suscipit.
                </p>
                <button className="mx-auto bg-orange-1 py-2 px-16">
                  Подробнее
                </button>
              </div>
              <div className="relative mt-auto flex h-[70vw] w-[70vw] sm:h-[40vw] sm:w-[40vw]">
                <Image
                  src="/hero.png"
                  alt="Инструктор портрет"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-10 bg-blue-2 p-5">
            <div className="flex flex-col-reverse items-center gap-5 lg:flex-row lg:justify-around">
              <div className="relative flex h-[50vw] w-[90vw] md:h-[40vw] md:w-[70vw] lg:h-[25vw] lg:w-[45vw]">
                <Image
                  src="/img1.jpg"
                  alt="Красоты Архыза"
                  fill
                  className="object-contain object-center"
                />
              </div>
              <div className="flex w-[90vw] flex-col justify-center gap-5 text-white-1 lg:w-[40vw]">
                <h2 className="relative text-center font-h text-2xl text-white lg:mb-5 xl:text-3xl 2xl:text-4xl">
                  Какой-нибудь заголовок
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris feugiat sodales elit a finibus. Praesent sit amet dolor
                  at neque.
                </p>
                <ol className="ml-5">
                  <li>
                    <span className="font-bold text-gray-4">Case 1:</span>Lorem
                    ipsum dolor sit amet ipsum dolor sit amet
                  </li>
                  <li>
                    <span className="font-bold text-gray-4">Case 2:</span>Lorem
                    ipsum dolor sit amet
                  </li>
                  <li>
                    <span className="font-bold text-gray-4">Case 3:</span>Lorem
                    ipsum dolor sit amet ipsum dolor
                  </li>
                  <li>
                    <span className="font-bold text-gray-4">Case 4:</span>Lorem
                    ipsum
                  </li>
                </ol>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris feugiat sodales elit a finibus. Praesent sit amet dolor
                  at neque rhoncus iaculis ut non risus. Vivamus porta sed
                  mauris sed suscipit.
                </p>
                <button className="mx-auto mb-5 bg-blue-4 py-2 px-16 text-white">
                  Подробнее
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-around">
              <div className="flex w-[90vw] flex-col justify-center gap-5 text-white-1 lg:w-[40vw]">
                <h2 className="relative text-center font-h text-2xl text-white lg:mb-5 xl:text-3xl 2xl:text-4xl">
                  Какой-нибудь заголовок
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris feugiat sodales elit a finibus. Praesent sit amet dolor
                  at neque.
                </p>
                <ol className="ml-5">
                  <li>
                    <span className="font-bold text-gray-4">Case 1:</span>Lorem
                    ipsum dolor sit amet ipsum dolor sit amet
                  </li>
                  <li>
                    <span className="font-bold text-gray-4">Case 2:</span>Lorem
                    ipsum dolor sit amet
                  </li>
                  <li>
                    <span className="font-bold text-gray-4">Case 3:</span>Lorem
                    ipsum dolor sit amet ipsum dolor
                  </li>
                  <li>
                    <span className="font-bold text-gray-4">Case 4:</span>Lorem
                    ipsum
                  </li>
                </ol>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris feugiat sodales elit a finibus. Praesent sit amet dolor
                  at neque rhoncus iaculis ut non risus. Vivamus porta sed
                  mauris sed suscipit.
                </p>
                <button className="mx-auto mb-5 bg-blue-4 py-2 px-16 text-white">
                  Подробнее
                </button>
              </div>
              <div className="relative flex h-[50vw] w-[90vw] md:h-[40vw] md:w-[70vw] lg:h-[25vw] lg:w-[45vw]">
                <Image
                  src="/img2.jpg"
                  alt="Красоты Архыза"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </div>
          </section>
          <div className="relative h-[40vh] w-[100vw]">
            <Image
              src="/mountain.jpg"
              alt="Горы"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
