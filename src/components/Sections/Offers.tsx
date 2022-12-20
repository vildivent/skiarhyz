import { type ReactNode, useState } from "react";
import Modal from "../Modal";

const Offers = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const clickModalHandler = (content: ReactNode) => {
    setModalIsOpen(true);
    setModalContent(content);
  };

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
          <div>
            <p>В программу индивидуальных и групповых занятий могут входить:</p>
            <ul className="list-inside list-disc font-bold text-gray-4">
              <li
                className="cursor-pointer hover:text-white"
                onClick={() =>
                  clickModalHandler(
                    <>
                      <h3 className="mb-3 text-center font-h text-2xl font-bold text-blue-4">
                        Базовая техника
                      </h3>
                      <p>
                        Самое главное на начальном этапе - освоить контроль
                        скорости и почувствовать то, что вы можете двигаться на
                        лыжах в контролируемом спуске. Вы должны уже на
                        начальном этапе научиться останавливаться и поворачивать
                        там, где вы хотите, а не там, где удобный рельеф или
                        уклон. С помощью базовой техники вы сможете легко и с
                        удовольствием кататься на трассах начального уровня
                        (зелёные, не крутые синие).
                      </p>
                    </>
                  )
                }
              >
                Базовая техника
              </li>

              <li
                className="cursor-pointer hover:text-white"
                onClick={() =>
                  clickModalHandler(
                    <>
                      <h3 className="mb-3 text-center font-h text-2xl font-bold text-blue-4">
                        Продвинутая техника
                      </h3>
                      <p>
                        Позволит кататься на большей скорости и с резкими
                        изменениями направления движения, с чередованием больших
                        и малых радиусов поворота, с замедлениями и ускорениями,
                        с движением без остановок на сменах рельефа и ритма
                        движения, технично и безопасно по трассам среднего
                        уровня (синие, красные).
                      </p>
                    </>
                  )
                }
              >
                Продвинутая техника
              </li>

              <li
                className="cursor-pointer hover:text-white"
                onClick={() =>
                  clickModalHandler(
                    <>
                      <h3 className="mb-3 text-center font-h text-2xl font-bold text-blue-4">
                        Карвинг
                      </h3>
                      <p>
                        Карвинг (резаные повороты) — это когда лыжи скользят
                        вдоль своей продольной оси кантами врезаясь в снег.
                        Принципиально это не является специально техникой — это
                        часть скользящего поворота, из которого убрали
                        поперечное проскальзывание. Используется преимущественно
                        на хорошо подготовленных трассах при движении с большой
                        скоростью. Постановка карвинга, при правильной
                        постановке базовой техники, требует только времени.
                      </p>
                    </>
                  )
                }
              >
                Карвинг
              </li>

              <li
                className="cursor-pointer hover:text-white"
                onClick={() =>
                  clickModalHandler(
                    <>
                      <h3 className="mb-3 text-center font-h text-2xl font-bold text-blue-4">
                        Катание по неподготовленному склону
                      </h3>
                      <p>
                        Направлено на совершенствование вашей техники и катание
                        на лыжах в сложных условиях местности. Вы перестанете
                        воспринимать &quot;красные&quot; и &quot;черные&quot;
                        склоны, как нечто ужасное и непроходимое, научитесь
                        свободно перемещаться по склону, невзирая на его
                        фактическое состояние (свежевыпавший снег, накопанные
                        другими лыжниками бугры, лед, &quot;расколбас&quot; и
                        пр.).
                      </p>
                    </>
                  )
                }
              >
                Катание по неподготовленному склону
              </li>
            </ul>
          </div>

          <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
            {modalContent}
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default Offers;
