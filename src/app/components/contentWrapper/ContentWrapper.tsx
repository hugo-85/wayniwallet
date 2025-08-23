import { FC, ReactNode } from "react";

interface ContentWrapperProps {
  children: ReactNode;
}

const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => {
  return (
    <div className="content-wrapper p-4 bg-white rounded-tl-4xl rounded-tr-4xl overflow-auto scrollbar-hide">
      {children}
    </div>
  );
};

export default ContentWrapper;
