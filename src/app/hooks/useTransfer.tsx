import { useQuery } from "@tanstack/react-query";
import { fetchTransfer } from "../services/api";
import { TransferType } from "../types/transferType";

export function useTransfer(id: string) {
  const { isPending, error, data } = useQuery<TransferType>({
    queryKey: ["transfer", id],
    queryFn: () => fetchTransfer(id),
  });

  return { isPending, error, data };
}
