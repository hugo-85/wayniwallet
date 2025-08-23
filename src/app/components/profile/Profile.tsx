"use client";

import { FC } from "react";
import Image from "next/image";
import { useWalletStore } from "@/app/store/walletStore";
import ProfileData from "../profileData/ProfileData";

const Profile: FC = () => {
  const { user } = useWalletStore();

  const fullName = user?.name.first + " " + user?.name.last;
  return (
    <section className="flex flex-col items-center justify-center gap-8 pt-8 w-full">
      <div className="flex flex-col items-center gap-4">
        <Image
          src={user?.picture?.large || ""}
          alt={fullName}
          width={237}
          height={237}
          className="rounded-full"
        />
        <h2 className="text-[32px] font-semibold">{fullName}</h2>
      </div>
      <div className="flex flex-col items-center gap-2 w-full">
        <ProfileData
          city={user?.location?.city || "N/A"}
          state={user?.location?.state || "N/A"}
          street={
            user?.location.street.name +
            ", " +
            (user?.location.street.number || "N/A")
          }
          email={user?.email || "N/A"}
          phone={user?.phone || "N/A"}
        />
      </div>
    </section>
  );
};

export default Profile;
