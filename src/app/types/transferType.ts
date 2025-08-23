import { UserType } from "./userTypes";

export type TransferType = {
  id: string;
  amount: number;
  date: string;
  note?: string;
  to: UserType;
};
