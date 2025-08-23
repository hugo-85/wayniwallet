"use client";

import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { UserType } from "@/app/types/userTypes";
import UserAvatar from "../userAvatar/UserAvatar";
import { NumericFormat } from "react-number-format";
import { useWalletStore } from "@/app/store/walletStore";
import CustomButton from "../customs/customButton/CustomButton";
import CustomTextArea from "../customs/customTextArea/CustomTextArea";
import { processTransfer } from "@/app/services/api";

interface SendFormProps {
  user: UserType;
}

const SendForm: FC<SendFormProps> = ({ user }) => {
  const router = useRouter();
  const { balance, subtractBalance } = useWalletStore((state) => state);
  const [formData, setFormData] = useState({
    amount: "",
    message: "",
  });

  const disabled = !formData.amount || parseFloat(formData.amount) === 0;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTransfer = await processTransfer({
      amount: parseFloat(formData.amount),
      message: formData.message,
      user: user,
    });
    subtractBalance(parseFloat(formData.amount));

    router.replace(`/transfers/success/${newTransfer.id}`);
  };

  return (
    <form
      className="h-full send-form w-full justify-center items-center flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <UserAvatar user={user} fullName />
      <div className="flex flex-col w-full justify-center items-center gap-2">
        <label className="text-[1.2rem]">Set Amount</label>
        <div className="text-2xl font-bold flex gap-2 items-center justify-center">
          ${" "}
          <NumericFormat
            value={formData.amount}
            onValueChange={(values) => {
              const { value } = values;
              setFormData((prev) => ({ ...prev, amount: value }));
            }}
            thousandSeparator
            decimalScale={2}
            fixedDecimalScale
            allowNegative={false}
            max={balance}
            isAllowed={({ floatValue }) =>
              floatValue === undefined || floatValue <= balance
            }
            placeholder="0.00"
            className="field-sizing-content outline-0"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col w-full gap-4">
        <span>Notes</span>
        <CustomTextArea
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
          placeholder="Enter your note"
        />
      </div>
      <CustomButton disabled={disabled} type="submit">
        Proceed to Transfer
      </CustomButton>
    </form>
  );
};

export default SendForm;
