import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const AvatarSkeleton = (props: IContentLoaderProps) => (
  <ContentLoader
    speed={2}
    width={65}
    height={93}
    viewBox="0 0 70 98"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="12" y="73" rx="3" ry="3" width="51" height="6" />
    <circle cx="38" cy="33" r="32" />
  </ContentLoader>
);

export default AvatarSkeleton;
