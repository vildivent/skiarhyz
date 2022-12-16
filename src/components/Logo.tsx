import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image src="/logo.svg" alt="logo" width={40} height={40} />
      <h3 className="font-logo text-4xl text-white">Архыз</h3>
    </div>
  );
};

export default Logo;
