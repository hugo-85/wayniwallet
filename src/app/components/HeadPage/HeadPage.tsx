import { FC } from "react";
import Link from "next/link";
import UserBalance from "../userBalance/UserBalance";
import ArrowLeftIcon from "@/app/svgs/ArowLeftIcon";

type HeadPageProps = {
  title: string;
  showBalance?: boolean;
};

const HeadPage: FC<HeadPageProps> = ({ title, showBalance }) => {
  return (
    <section>
      <div className="flex items-center px-4 pb-6">
        <Link href={"/"} className="cursor-pointer">
          <ArrowLeftIcon />
        </Link>
        <h3 className="flex-1 text-center text-xl text-white font-bold mr-[18px]">
          {title}
        </h3>
      </div>
      {showBalance && <UserBalance />}
    </section>
  );
};

export default HeadPage;
