import { useQuery } from "@tanstack/react-query";
import { fetchLatestTransfers } from "../services/api";
import { TransferType } from "../types/transferType";

export function useLatestTransfers(date: Date | null) {
  const { isPending, error, data } = useQuery<TransferType[]>({
    queryKey: ["latestTransfers", date],
    queryFn: () => fetchLatestTransfers(date),
  });

  return { isPending, error, data };
}
