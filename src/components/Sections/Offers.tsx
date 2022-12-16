const Offers = () => {
  return (
    <section className="flex flex-col gap-10 bg-blue-2 p-5 pt-10">
      <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-around">
        <div className="flex flex-col justify-center gap-5 text-white-1">
          <h2 className="relative text-center font-h text-2xl font-bold text-white xl:text-3xl 2xl:text-4xl">
            Мои предложения:
          </h2>
          <ol className="ml-5 list-decimal font-bold text-gray-4">
            <li>
              <span
                className="cursor-pointer hover:text-white"
                onClick={() => {
                  document.getElementById("personal")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {`Индивидуальные `}
              </span>
              <span className="font-normal text-white">
                занятия продолжительностью от 1,5 до 4 часов.
              </span>
            </li>
            <li>
              <span
                className="cursor-pointer hover:text-white"
                onClick={() => {
                  document.getElementById("group")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {"Групповые "}
              </span>
              <span className="font-normal text-white">
                занятия, от 3х и более человек, продолжительностью от 2х часов.
              </span>
            </li>
            <li>
              <span
                className="cursor-pointer hover:text-white"
                onClick={() => {
                  document.getElementById("childrens")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {"Детские "}
              </span>
              <span className="font-normal text-white">занятия от 7 лет</span>
            </li>
            <li>
              <span
                className="cursor-pointer hover:text-white"
                onClick={() => {
                  document.getElementById("special")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {"Специальный Курс "}
              </span>
              <span className="font-normal text-white">
                обучения. Базовый курс 3 дня, Полный курс 5 дней.
              </span>
            </li>
            <li>
              <span
                className="cursor-pointer hover:text-white"
                onClick={() => {
                  document.getElementById("vip")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                VIP День
              </span>
            </li>
            <li>
              <span
                className="cursor-pointer hover:text-white"
                onClick={() => {
                  document.getElementById("video")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Видеосъёмка
              </span>
            </li>
          </ol>
          <h3 className="text-lg font-bold">
            В программу индивидуальных и групповых занятий могут входить:
          </h3>
          <ul className="list-inside list-disc">
            <li>Обучение начальным базовым элементам</li>
            <li>Продвинутый стиль катания</li>
            <li>Карвинговое катание</li>
          </ul>
          <p>
            Катание по неподготовленному склону (разбитые участки склона, бугры,
            «расколбас»)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offers;
