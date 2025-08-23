import { FC } from "react";
import Image from "next/image";
import { TransferType } from "@/app/types/transferType";
import { formatAmount, formatLongDate, formatTime } from "@/app/lib/helpers";
import DetailItem from "../detailItem/DetailItem";

interface SuccessContentProps {
  transfer: TransferType;
}

const SuccessContent: FC<SuccessContentProps> = ({ transfer }) => {
  const { amount, to } = transfer;
  const { first, last } = to.name;
  return (
    <div className="w-full rounded-3xl border border-transparent bg-white pt-10 pb-20 p-4 text-center">
      <div className="mb-4">
        <h2 className="text-[#03B961] text-[1.125rem] font-bold leading-tight">
          Transfer Successful
        </h2>
        <h4 className="text-1xl text-gray-400 font-light">
          Your transaction was successful
        </h4>
      </div>
      <div className="text-[2.5rem] font-bold mb-8">{formatAmount(amount)}</div>
      <div className="flex flex-col gap-3 mb-10">
        <h5 className="font-bold">Send to</h5>
        <div className="flex justify-center items-center gap-4">
          <Image
            src={to.picture.thumbnail}
            alt={last}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span>{first}</span>
            <span>{last}</span>
          </div>
        </div>
      </div>
      <div className="w-full">
        <h5 className="text-left font-bold mb-2">Transaction Details</h5>
        <div>
          <DetailItem label="Payment" value={formatAmount(amount)} />
          <DetailItem label="Notes" value={transfer?.note || ""} />
          <DetailItem label="Date" value={formatLongDate(transfer.date)} />
          <DetailItem label="Time" value={formatTime(transfer.date)} />
          <DetailItem label="Reference Number" value={transfer?.id || ""} />
        </div>
      </div>
    </div>
  );
};

export default SuccessContent;
