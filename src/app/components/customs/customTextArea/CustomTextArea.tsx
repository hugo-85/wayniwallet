import { DetailedHTMLProps, FC, TextareaHTMLAttributes } from "react";

const CustomTextArea: FC<
  DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
> = (props) => {
  return (
    <textarea
      className="w-full rounded-2xl text-sm font-medium text-gray-500 bg-[#F7F7F7] border-2 border-[#E6E6E6] p-2 py-4 px-6 resize-none min-h-[150px] max-h-[300px]"
      {...props}
    />
  );
};

export default CustomTextArea;
