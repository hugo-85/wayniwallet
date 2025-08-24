"use client";

import { FC } from "react";
import TransactionItem from "../transactionItem/TransactionItem";
import { useTransactions } from "@/app/hooks/useTransactions";

const LatestTransactions: FC = () => {
  const { data } = useTransactions();

  return (
    <div className="flex-1 max-h-full flex flex-col gap-4 overflow-auto scrollbar-hide">
      <h1 className="text-xl font-bold text-black text-center">
        Latest Transactions
      </h1>
      <ul className="flex-1 overflow-auto scrollbar-hide">
        {data?.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default LatestTransactions;
