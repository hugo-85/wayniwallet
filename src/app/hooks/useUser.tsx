import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../services/api";
import { UserType } from "../types/userTypes";

export function useUser(id: string) {
  const { isPending, error, data } = useQuery<UserType>({
    queryKey: ["user", id],
    queryFn: () => fetchUser(id),
  });

  return { isPending, error, data };
}
