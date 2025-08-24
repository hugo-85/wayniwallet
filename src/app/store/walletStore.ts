import { create } from "zustand";
import { UserType } from "../types/userTypes";
import { persist } from "zustand/middleware";
import { fetchCurrentUser } from "../services/api";

type State = {
  user: UserType | null;
  balance: number;
  fetchCurrentUser: () => Promise<UserType>;
  addBalance: (amount: number) => void;
  subtractBalance: (amount: number) => void;
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
};

export const useWalletStore = create<State>()(
  persist(
    (set) => ({
      user: null,
      balance: 0,
      fetchCurrentUser: async () => {
        // simulate delay
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const { user, balance } = await fetchCurrentUser();
        set({ user, balance });
        return user;
      },
      addBalance: (amount: number) =>
        set((state) => ({ balance: state.balance + amount })),
      subtractBalance: (amount: number) =>
        set((state) => ({ balance: state.balance - amount })),
      _hasHydrated: false,
      setHasHydrated: (state: boolean) => set({ _hasHydrated: state }),
    }),
    {
      name: "wallet-store",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
