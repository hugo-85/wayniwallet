import { FC } from "react";

interface ContentHeaderProps {
  title: string;
}

const ContentHeader: FC<ContentHeaderProps> = ({ title }) => {
  return (
    <div className="flex items-center justify-center pt-2 px-2 pb-4">
      <h2 className="text-black text-xl font-bold">{title}</h2>
    </div>
  );
};

export default ContentHeader;
