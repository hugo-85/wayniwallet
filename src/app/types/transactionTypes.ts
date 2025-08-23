export type TransactionCategory =
  | "income"
  | "transfer"
  | "internet"
  | "insurance";

export type TransactionType = {
  id: string;
  type: TransactionCategory;
  amount: number;
  date: string;
};
