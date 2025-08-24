"use client";

import { FC, useEffect, useLayoutEffect, useState } from "react";
import { useWalletStore } from "@/app/store/walletStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fillLocalStorageWithMockData } from "@/app/lib/helpers";
import Image from "next/image";

// Create a client
const queryClient = new QueryClient();

interface MainProps {
  children: React.ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  const user = useWalletStore((state) => state.user);
  const fetchCurrentUser = useWalletStore((state) => state.fetchCurrentUser);
  const hasHydrated = useWalletStore((state) => state._hasHydrated);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const wayniTransactions = localStorage.getItem("wayni_transactions");
    const wayniTransfers = localStorage.getItem("wayni_transfers");
    const recentUsers = localStorage.getItem("wayni_recent_users");
    if (!wayniTransactions || !wayniTransfers || !recentUsers) {
      fillLocalStorageWithMockData();
    }
  }, []);

  useLayoutEffect(() => {
    if (!hasHydrated) return;
    if (!user) fetchCurrentUser();
    else setLoading(false);
  }, [user, fetchCurrentUser, hasHydrated]);

  return (
    <QueryClientProvider client={queryClient}>
      <main>
        {!loading && children}
        {loading && (
          <div className="flex flex-col gap-10 justify-center items-center h-full">
            <Image src="/wsplash.gif" alt="WAYNI+" width={200} height={200} />
            <h1 className="text-white text-6xl font-extrabold">WAYNI+</h1>
          </div>
        )}
      </main>
    </QueryClientProvider>
  );
};

export default Main;
