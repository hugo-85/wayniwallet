import { TransactionType } from "./../types/transactionTypes";
import { TransferType } from "../types/transferType";
import { UserType } from "../types/userTypes";

const API_URL =
  process.env.NODE_ENV === "production"
    ? process.env.API_URL
    : "https://randomuser.me/api";

export const fetchCurrentUser = async (): Promise<{
  user: UserType;
  balance: number;
}> => {
  const resp = await fetch(`${API_URL}`);
  const data = await resp.json();
  const user: UserType = data?.results[0] || null;

  user.id.value = user.id?.value
    ? user.id.value.replaceAll(" ", "")
    : Math.floor(Math.random() * 1e10)
        .toString()
        .padStart(10, "0");

  const balance = 12500;
  return { user, balance };
};

export const fetchTransactions = async (): Promise<TransactionType[]> => {
  const localStorageData = localStorage.getItem("wayni_transactions");
  if (localStorageData) {
    return JSON.parse(localStorageData);
  }

  const response = await fetch("/transactionsData.json");
  if (!response.ok) throw new Error("Failed to fetch transactions");
  return response.json();
};

export const fetchRecentUsers = async (): Promise<UserType[]> => {
  const localStorageData = localStorage.getItem("wayni_recent_users");
  if (localStorageData) {
    return JSON.parse(localStorageData);
  }

  const response = await fetch("/recentUsers.json");
  if (!response.ok) throw new Error("Failed to fetch recent users");
  return response.json();
};

export const fetchLatestTransfers = async (): Promise<TransferType[]> => {
  const localStorageData = localStorage.getItem("wayni_transfers");
  if (localStorageData) {
    return JSON.parse(localStorageData);
  }

  const response = await fetch("/transfersData.json");
  if (!response.ok) throw new Error("Failed to fetch latest transfers");
  return response.json();
};

export const fetchTransfer = async (id: string): Promise<TransferType> => {
  const transfers: TransferType[] = JSON.parse(
    localStorage.getItem("wayni_transfers") || "[]"
  );
  const transfer = transfers.find((transfer) => transfer.id === id);
  if (transfer) return new Promise((resolve) => resolve(transfer));
  throw new Error("Transfer not found");
};

export const fetchUser = async (id: string): Promise<UserType> => {
  const users: UserType[] = JSON.parse(
    localStorage.getItem("wayni_recent_users") || "[]"
  );
  const user = users.find((user) => user.id.value === id);

  if (user) return new Promise((resolve) => resolve(user));

  throw new Error("User not found");
};

export const processTransfer = async (transactionData: {
  amount: number;
  message: string;
  user: UserType;
}): Promise<TransferType> => {
  try {
    const localStorageTransfers = localStorage.getItem("wayni_transfers");
    const localStorageTransactions = localStorage.getItem("wayni_transactions");

    const transfers: TransferType[] = localStorageTransfers
      ? JSON.parse(localStorageTransfers)
      : [];

    const transactions: TransactionType[] = localStorageTransactions
      ? JSON.parse(localStorageTransactions)
      : [];

    const newTransfer: TransferType = {
      id: Math.floor(Math.random() * 1e10)
        .toString()
        .padStart(10, "0"),
      date: new Date().toISOString(),
      amount: transactionData.amount,
      note: transactionData.message,
      to: transactionData.user,
    };

    transfers.unshift(newTransfer);
    localStorage.setItem("wayni_transfers", JSON.stringify(transfers));

    const newTransaction: TransactionType = {
      id: Math.floor(Math.random() * 1e10)
        .toString()
        .padStart(10, "0"),
      type: "transfer",
      amount: transactionData.amount,
      date: new Date().toISOString(),
    };

    transactions.unshift(newTransaction);
    localStorage.setItem("wayni_transactions", JSON.stringify(transactions));

    return newTransfer;
  } catch (error) {
    console.error("Error processing transfer:", error);
    throw error;
  }
};
