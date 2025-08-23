"use client";

import { useLatestTransfers } from "@/app/hooks/useLatestTransfers";
import { FC } from "react";
import LatestTransferItem from "../latestTransferItem/LatestTransferItem";

const LatestTransfers: FC = () => {
  const { data } = useLatestTransfers();

  return (
    <section>
      {data && (
        <ul className="flex flex-col gap-6">
          {data.map((transfer) => (
            <LatestTransferItem key={transfer.id} data={transfer} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default LatestTransfers;
