import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-around bg-gray-5 text-gray-1">
      <div className="z-[3] mt-20 mb-28 flex flex-col items-center gap-5 sm:mb-[15vw] sm:mt-[8vw]">
        <h2 className="text-center font-h text-2xl font-bold xl:text-3xl 2xl:text-4xl">
          Контакты
        </h2>

        <a href="tel:+79283843040" rel="nofollow" className="hover:text-white">
          +7 (928) 384-30-40
        </a>
        <ul className="flex gap-5">
          {socialLinks.map((socialLink) => (
            <li key={socialLink.id} className="hover:translate-y-[1px]">
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
        className="absolute bottom-0 z-[2] h-[20vw] w-full bg-gray-3"
        style={{
          clipPath:
            "polygon(0 100%, 0 60%, 30% 0, 45% 50%, 60% 10%, 100% 80%, 100% 100%)",
        }}
      />
      <div
        className="absolute bottom-0 z-[1] h-[20vw] w-full bg-gray-6"
        style={{
          clipPath: "polygon(40% 100%, 75% 0, 100% 50%, 100% 100%)",
        }}
      />

      <span className="absolute bottom-0 z-[3] py-5">© 2023</span>
    </div>
  );
};

export default Footer;

const socialLinks = [
  {
    id: "whatsapp",
    title: "WhatsApp",
    logo: "/socials/whatsapp.svg",
    link: "https://wa.me/79283843040",
  },
  {
    id: "telegram",
    title: "Телеграм",
    logo: "/socials/telegram.svg",
    link: "https://telegram.me/dimglen",
  },
  {
    id: "vk",
    title: "ВКонтакте",
    logo: "/socials/vk.svg",
    link: "https://vk.me/id23187362",
  },
  {
    id: "instagram",
    title: "Инстаграм",
    logo: "/socials/instagram.svg",
    link: "https://www.instagram.com/dimglen/",
  },
  {
    id: "nowapp",
    title: "Nowapp",
    logo: "/socials/nowapp.svg",
    link: "https://nowapp.me/dimglen",
  },
];
