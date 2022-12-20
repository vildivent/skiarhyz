import { type NextPage } from "next";
import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import { headImage3 } from "../../public";
import Image from "next/image";
import {
  phoneIconColor,
  telegramIconColor,
  vkIconColor,
  whatsappIconColor,
} from "../../public/socials/color";
import { imgUrl } from ".";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { icon } from "../../public";

const Contacts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Контакты | Дмитрий Инструктор по горным лыжам</title>
        <meta name="description" content="Контакты" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="image" content={imgUrl} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Контакты | Дмитрий Инструктор по горным лыжам"
        />
        <meta property="og:description" content="Контакты" />
        <meta property="og:image" itemProp="image" content={imgUrl} />
      </Head>

      <MainLayout title="Контакты" imgSrc={headImage3} alt="Зимний лес">
        <div className="my-5 flex flex-col items-center gap-5">
          <p className="mx-5 text-center">
            Для записи на занятие свяжитесь со мной одним из следующих способов:
          </p>

          <ul className="mx-auto flex flex-col gap-5">
            <>
              {socialLinks.map((socialLink) => (
                <li key={socialLink.id} className="hover:text-blue-3">
                  <a
                    key={socialLink.id}
                    href={socialLink.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-5"
                  >
                    <Image
                      src={socialLink.logo}
                      alt={socialLink.title}
                      width={40}
                      height={40}
                      className={socialLink.id === "tel" ? "p-1" : ""}
                    />
                    <span>{socialLink.title}</span>
                  </a>
                </li>
              ))}
            </>
          </ul>
        </div>
      </MainLayout>
    </>
  );
};

export default Contacts;

const socialLinks = [
  {
    id: "tel",
    title: "+7 (928) 384-30-40",
    logo: phoneIconColor,
    link: "tel:+79283843040",
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    logo: whatsappIconColor,
    link: "https://wa.me/79283843040",
  },
  {
    id: "telegram",
    title: "Телеграм",
    logo: telegramIconColor,
    link: "https://telegram.me/dimglen",
  },
  {
    id: "vk",
    title: "ВКонтакте",
    logo: vkIconColor,
    link: "https://vk.me/id23187362",
  },
];
