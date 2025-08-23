import { FC } from "react";

interface DetailItemProps {
  label: string;
  value: string;
}

const DetailItem: FC<DetailItemProps> = ({ label, value }) => {
  return (
    <div className="flex justify-between items-center gap-4 p-1 w-full">
      <label className="text-[16px] text-gray-400">{label}</label>
      <span className="text-[16px] font-bold">{value}</span>
    </div>
  );
};

export default DetailItem;
