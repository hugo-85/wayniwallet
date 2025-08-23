import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

type CustomButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: "contained" | "outline";
};

const CustomButton: FC<CustomButtonProps> = (props) => {
  let classVal =
    "w-full rounded-4xl text-[1.15rem] font-extrabold bg-[#0FD08B] text-white p-2 hover:opacity-80 py-4 px-6 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  if (props.variant === "outline") {
    classVal =
      "w-full rounded-4xl text-[1.15rem] font-extrabold border border-white text-white p-2 hover:opacity-80 py-4 px-6 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  }

  return (
    <button className={classVal} {...props}>
      {props.children}
    </button>
  );
};

export default CustomButton;
