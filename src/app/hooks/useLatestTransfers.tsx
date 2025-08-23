import { useQuery } from "@tanstack/react-query";
import { fetchLatestTransfers } from "../services/api";
import { TransferType } from "../types/transferType";

export function useLatestTransfers() {
  const { isPending, error, data } = useQuery<TransferType[]>({
    queryKey: ["latestTransfers"],
    queryFn: fetchLatestTransfers,
  });

  return { isPending, error, data };
}
