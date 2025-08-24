"use client";

import { useLatestTransfers } from "@/app/hooks/useLatestTransfers";
import { FC, useState } from "react";
import LatestTransferItem from "../latestTransferItem/LatestTransferItem";
import CustomDatePicker from "../customs/customDatePicker/CustomDatePicker";

const LatestTransfers: FC = () => {
  const [date, setDate] = useState<Date | null>(null);
  const { data } = useLatestTransfers(date);

  return (
    <section className="flex flex-col max-h-full">
      <div className="flex items-center justify-between pt-2 px-2 pb-4">
        <h2 className="text-black text-xl font-bold">Latest Transfers</h2>
        <CustomDatePicker selectedDate={date} onDateChange={setDate} />
      </div>
      {data && (
        <ul className="flex-1 flex flex-col gap-6 overflow-auto scrollbar-hide">
          {data.map((transfer) => (
            <LatestTransferItem key={transfer.id} data={transfer} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default LatestTransfers;
