import { type ReactNode } from "react";

type TextCardProps = {
  children: ReactNode;
  type?: "right" | "left";
  margin?: string;
};

const TextCard = ({ children, type = "right", margin }: TextCardProps) => {
  return (
    <div
      className={`z-[1] w-[100%] lg:w-1/2 ${margin}`}
      style={{ filter: "drop-shadow(-1px 6px 3px rgba(34, 60, 80, 0.2))" }}
    >
      {/* <div
        className="h-10 w-full bg-white-1"
        style={{
          clipPath:
            type === "right"
              ? "polygon(0% 0%, 0% 100%, 100% 100%)"
              : "polygon(100% 0%, 0% 100%, 100% 100%)",
        }}
      /> */}
      <div
        className="flex flex-col gap-5 bg-white-1 px-7 py-16 sm:px-16 sm:py-20 md:px-24 md:py-28"
        style={{
          clipPath:
            type === "right"
              ? "polygon(0% 0%, 0% 100%, 100% calc(100% - 1.75rem), 100% 2.5rem)"
              : "polygon(0 2.5rem, 0 calc(100% - 1.75rem), 100% 100%, 100% 0)",
        }}
      >
        {children}
      </div>
      {/* <div
        className={`h-7 w-full bg-white-1 ${margin}`}
        style={{
          clipPath:
            type === "right"
              ? "polygon(0% 0%, 0% 100%, 100% 0%)"
              : "polygon(0% 0%, 100% 0%, 100% 100%)",
        }}
      /> */}
    </div>
  );
};

export default TextCard;
