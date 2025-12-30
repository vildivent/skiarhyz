import type { Metadata } from "next";
import Image from "next/image";
import MainLayout from "~/components/layouts/MainLayout";
import { telMain } from "~/shared/config/constants";
import { env } from "~/shared/config/env";
import { headImage3 } from "../../../public";
import {
  phoneIconColor,
  telegramIconColor,
  vkIconColor,
  whatsappIconColor,
} from "../../../public/socials/color";
import {
  telFormat,
  telToHref,
  telToTelegramHref,
  telToWhatsappHref,
} from "~/shared/lib/tel";

const title = "Контакты | Дмитрий Инструктор по горным лыжам";
const description = "Выберите способ, которым удобно связаться со мной";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: `${env.BASE_URL}/contacts`,
    phoneNumbers: telMain,
  },
  alternates: {
    canonical: `${env.BASE_URL}/contacts`,
  },
};

export default function Contacts() {
  return (
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
  );
}

const socialLinks = [
  {
    id: "tel",
    title: telFormat(telMain),
    logo: phoneIconColor,
    link: telToHref(telMain),
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    logo: whatsappIconColor,
    link: telToWhatsappHref(telMain),
  },
  {
    id: "telegram",
    title: "Телеграм",
    logo: telegramIconColor,
    link: telToTelegramHref(telMain),
  },
  {
    id: "vk",
    title: "ВКонтакте",
    logo: vkIconColor,
    link: "https://vk.me/id23187362",
  },
];
