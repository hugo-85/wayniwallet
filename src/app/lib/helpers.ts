import ArrowDownIcon from "../svgs/transaction/ArrowDownIcon";
import TwoArrowIcon from "../svgs/transaction/TwoArrowIcon";
import WalletIcon from "../svgs/transaction/WalletIcon";
import { TransactionCategory } from "../types/transactionTypes";
import { TransferType } from "../types/transferType";

// Formats a date string to HH:mm (24-hour) format.
export const formatTime = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

// Formats a date string to 'MMM DD, YYYY · HH:mm' format.
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const dateStr = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const timeStr = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return `${dateStr} · ${timeStr}`;
};

// Formats a date string to 'Month DD, YYYY' format.
export const formatLongDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Formats a number as USD currency.
export const formatAmount = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

// Returns '+' for income, '-' for other transaction types.
export const getAmountTypeSign = (type: TransactionCategory) => {
  return type === "income" ? "+" : "-";
};

const transactionIcons = {
  internet: ArrowDownIcon,
  transfer: TwoArrowIcon,
  income: WalletIcon,
  insurance: ArrowDownIcon,
};

// Returns the icon component for a transaction type.
export const getTransactionTypeIcon = (type: TransactionCategory) => {
  return transactionIcons[type];
};

const transactionsLabels = {
  internet: "Internet",
  transfer: "Transfer",
  income: "CashIn",
  insurance: "Insurance",
};

// Returns a user-friendly label for a transaction type.
export const getLabelForTransactionType = (type: TransactionCategory) => {
  return transactionsLabels[type] || type;
};

// Finds and returns a user by ID from localStorage.
export const getUser = (userId: string) => {
  const users = JSON.parse(localStorage.getItem("wayni_recent_users") || "[]");
  return users.find((user: { id: string }) => user.id === userId);
};

// Filters transfers by a specific date. Returns all if date is null.
export const filterTransfersByDate = (
  transfers: TransferType[],
  date: Date | null
) => {
  if (!date) return transfers;
  const d = new Date(date);
  return transfers.filter((t) => {
    const tDate = new Date(t.date);
    return (
      tDate.getDate() === d.getDate() &&
      tDate.getMonth() === d.getMonth() &&
      tDate.getFullYear() === d.getFullYear()
    );
  });
};

// Loads mock data into localStorage if not already present.
export const fillLocalStorageWithMockData = async () => {
  const wayniTransactions = localStorage.getItem("wayni_transactions");
  const wayniTransfers = localStorage.getItem("wayni_transfers");
  const recentUsers = localStorage.getItem("wayni_recent_users");

  if (!wayniTransactions) {
    const respTransactions = await fetch("/transactionsData.json");
    const transactionsData = await respTransactions.json();
    localStorage.setItem(
      "wayni_transactions",
      JSON.stringify(transactionsData)
    );
  }

  if (!wayniTransfers) {
    const respTransfers = await fetch("/transfersData.json");
    const transfersData = await respTransfers.json();
    localStorage.setItem("wayni_transfers", JSON.stringify(transfersData));
  }

  if (!recentUsers) {
    const respUsers = await fetch("/recentUsers.json");
    const usersData = await respUsers.json();
    localStorage.setItem("wayni_recent_users", JSON.stringify(usersData));
  }
};
