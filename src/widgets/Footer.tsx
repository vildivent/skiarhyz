import Image from "next/image";
import { telMain } from "~/shared/config/constants";
import {
  telFormat,
  telToHref,
  telToTelegramHref,
  telToWhatsappHref,
} from "~/shared/lib/tel";

const Footer = () => {
  return (
    <div className="bg-gray-5 text-gray-1 relative flex w-full flex-col items-center justify-around">
      <div className="z-3 mt-20 mb-28 flex flex-col items-center gap-5 sm:mt-[8vw] sm:mb-[15vw]">
        <h2 className="font-h text-center text-2xl font-bold xl:text-3xl 2xl:text-4xl">
          Контакты
        </h2>

        <a
          href={telToHref(telMain)}
          rel="nofollow"
          className="hover:text-white"
        >
          {telFormat(telMain)}
        </a>
        <ul className="flex gap-5">
          {socialLinks.map((socialLink) => (
            <li key={socialLink.id} className="hover:translate-y-px">
              <a
                key={socialLink.id}
                href={socialLink.link}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={socialLink.logo}
                  alt={socialLink.title}
                  width={40}
                  height={40}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="bg-gray-3 absolute bottom-0 z-2 h-[20vw] w-full"
        style={{
          clipPath:
            "polygon(0 100%, 0 60%, 30% 0, 45% 50%, 60% 10%, 100% 80%, 100% 100%)",
        }}
      />
      <div
        className="bg-gray-6 absolute bottom-0 z-1 h-[20vw] w-full"
        style={{
          clipPath: "polygon(40% 100%, 75% 0, 100% 50%, 100% 100%)",
        }}
      />

      <span className="absolute bottom-0 z-3 py-5">© 2023 - 2026</span>
    </div>
  );
};

export default Footer;

const socialLinks = [
  {
    id: "whatsapp",
    title: "WhatsApp",
    logo: "/socials/whatsapp.svg",
    link: telToWhatsappHref(telMain),
  },
  {
    id: "telegram",
    title: "Телеграм",
    logo: "/socials/telegram.svg",
    link: telToTelegramHref(telMain),
  },
  {
    id: "vk",
    title: "ВКонтакте",
    logo: "/socials/vk.svg",
    link: "https://vk.me/id23187362",
  },
  {
    id: "nowapp",
    title: "Nowapp",
    logo: "/socials/nowapp.svg",
    link: "https://nowapp.me/dimglen",
  },
];
