"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import FooterButton from "../footerButton/FooterButton";
import HomeIcon from "@/app/svgs/footer/HomeIcon";
import TransferIcon from "@/app/svgs/footer/transferIcon";
import ProfileIcon from "@/app/svgs/footer/ProfileIcon";

const FooterBar: FC = () => {
  const pathname = usePathname();

  return (
    <footer className="bg-white py-4 shadow-[0_-4px_12px_-4px_rgba(0,0,0,0.15)] flex justify-between items-center px-16">
      <FooterButton
        Icon={HomeIcon}
        title="Home"
        active={pathname === "/"}
        path="/"
      />
      <FooterButton
        Icon={TransferIcon}
        title="Transfers"
        active={pathname === "/transfers"}
        path="/transfers"
      />
      <FooterButton
        Icon={ProfileIcon}
        title="Profile"
        active={pathname === "/profile"}
        path="/profile"
      />
    </footer>
  );
};

export default FooterBar;
