import { FC } from "react";
import { TransactionType } from "@/app/types/transactionTypes";
import {
  formatAmount,
  formatDate,
  getAmountTypeSign,
  getLabelForTransactionType,
  getTransactionTypeIcon,
} from "@/app/lib/helpers";

interface TransactionItemProps {
  transaction: TransactionType;
}

const TransactionItem: FC<TransactionItemProps> = ({ transaction }) => {
  const sign = getAmountTypeSign(transaction.type);
  const amountClass = `text-[1.25rem] font-bold ${
    sign === "+" ? "text-green-500" : "text-red-500"
  }`;

  const Icon = getTransactionTypeIcon(transaction.type);

  return (
    <li
      key={transaction.id}
      className="flex justify-between items-center gap-3 p-2"
    >
      <div className="rounded-full bg-[#F9F5FE] p-3">
        <Icon />
      </div>
      <div className="flex-1 flex flex-col gap-0.8">
        <label className="text-[1.25rem]">
          {getLabelForTransactionType(transaction.type)}
        </label>
        <span className="text-sm text-gray-400">
          {formatDate(transaction.date)}
        </span>
      </div>
      <span className={amountClass}>
        {sign} {formatAmount(transaction.amount)}
      </span>
    </li>
  );
};

export default TransactionItem;
