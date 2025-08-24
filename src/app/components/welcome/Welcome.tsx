"use client";

import { FC } from "react";
import { useWalletStore } from "@/app/store/walletStore";
import UserAvatar from "../userAvatar/UserAvatar";
import { formatAmount } from "@/app/lib/helpers";

const Welcome: FC = () => {
  const { user, balance } = useWalletStore();
  return (
    <section className="px-2 mb-5">
      <div className="px-5 py-4 flex items-center gap-4 border border-white rounded-3xl">
        {user && <UserAvatar user={user} width={80} height={80} hideName />}
        <div className="flex flex-col gap-1">
          <h2 className="text-white font-extrabold text-2xl">
            Welcome, {user?.name.first}!
          </h2>
          <h3 className="text-white font-bold text-3xl">
            {formatAmount(balance)}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
