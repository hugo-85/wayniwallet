import { useQuery } from "@tanstack/react-query";
import { fetchRecentUsers } from "../services/api";
import { UserType } from "../types/userTypes";

export function useRecentUsers() {
  const { isPending, error, data } = useQuery<UserType[]>({
    queryKey: ["recentUsers"],
    queryFn: fetchRecentUsers,
  });

  return { isPending, error, data };
}
