import { FC } from "react";
import CustomButton from "../customs/customButton/CustomButton";
import Link from "next/link";

const SuccessActions: FC = () => {
  return (
    <footer className="w-full flex flex-col gap-4">
      <CustomButton variant="outline">Share</CustomButton>
      <Link
        href="/"
        className="bg-white w-full rounded-3xl py-4 px-6 text-center text-[1.15rem] block text-[#0FD08B] font-bold hover:opacity-80"
      >
        Back to Home
      </Link>
    </footer>
  );
};

export default SuccessActions;
