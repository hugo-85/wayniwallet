import { formatAmount, formatDate } from "@/app/lib/helpers";
import { TransferType } from "@/app/types/transferType";
import Image from "next/image";
import { FC } from "react";

interface LatestTransferItemProps {
  data: TransferType;
}

const LatestTransferItem: FC<LatestTransferItemProps> = ({ data }) => {
  return (
    <li className="flex items-center gap-4">
      <Image
        src={data.to.picture.thumbnail}
        alt={data.to.name.first}
        width={65}
        height={65}
        className="rounded-full"
      />
      <div className="flex-1 flex flex-col gap-0.8">
        <label>{data.to.name.first}</label>
        <span className="text-sm text-gray-400">{formatDate(data.date)}</span>
      </div>
      <span className="text-[1.25rem] font-bold">
        {formatAmount(data.amount)}
      </span>
    </li>
  );
};

export default LatestTransferItem;
