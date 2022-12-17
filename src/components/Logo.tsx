import Image from "next/image";
import { logoBlue, logoWhite } from "../../public";

type LogoProps = {
  blue?: boolean;
};

const Logo = ({ blue = false }: LogoProps) => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={blue ? logoBlue : logoWhite}
        alt="logo"
        width={40}
        height={40}
      />
      <h3
        className={`font-logo text-4xl ${blue ? "text-blue-3" : "text-white"} `}
      >
        Архыз
      </h3>
    </div>
  );
};

export default Logo;
