import Link from "next/link";
import { FC } from "react";

interface FooterButtonProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  active: boolean;
  path: string;
}

const FooterButton: FC<FooterButtonProps> = ({ title, active, Icon, path }) => {
  return (
    <Link
      href={path}
      className=" text-white font-bold rounded flex flex-col justify-center items-center gap-2
    hover:scale-105 cursor-pointer
    "
    >
      <Icon fill={active ? "#662AB2" : "#999999"} />
      <span
        className={`text-[0.875em] ${
          active ? "text-[#662AB2]" : "text-[#999999]"
        }`}
      >
        {title}
      </span>
    </Link>
  );
};

export default FooterButton;
