"use client";

import SuccessActions from "@/app/components/successActions/SuccessActions";
import SuccessContent from "@/app/components/successContent/SuccessContent";
import { useTransfer } from "@/app/hooks/useTransfer";
import { useParams } from "next/navigation";

export default function TransfersPage() {
  const { id } = useParams();
  const { data } = useTransfer(id as string);

  return (
    <section className="flex flex-col gap-10 items-center justify-end h-full p-6">
      {data && <SuccessContent transfer={data} />}
      <SuccessActions />
    </section>
  );
}
