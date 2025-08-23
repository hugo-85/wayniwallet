import { useQuery } from "@tanstack/react-query";
import { TransactionType } from "../types/transactionTypes";
import { fetchTransactions } from "../services/api";

export function useTransactions() {
  const { isPending, error, data } = useQuery<TransactionType[]>({
    queryKey: ["latestTransactions"],
    queryFn: fetchTransactions,
  });

  return { isPending, error, data };
}
