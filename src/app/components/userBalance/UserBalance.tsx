"use client";

import { formatAmount } from "@/app/lib/helpers";
import { useWalletStore } from "@/app/store/walletStore";
import { FC } from "react";

const UserBalance: FC = () => {
  const { balance } = useWalletStore();

  return (
    <div className="flex flex-col items-center justify-center pt-1 pb-8 text-white">
      <label className="text-sm">Your Balance</label>
      <span className="text-2xl font-bold">{formatAmount(balance)}</span>
    </div>
  );
};

export default UserBalance;
