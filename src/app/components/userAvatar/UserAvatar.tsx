import { FC } from "react";
import Image from "next/image";
import { UserType } from "@/app/types/userTypes";

interface UserAvatarProps {
  user: UserType;
  fullName?: boolean;
  width?: number;
  height?: number;
  hideName?: boolean;
}

const UserAvatar: FC<UserAvatarProps> = ({
  user,
  fullName,
  width,
  height,
  hideName,
}) => {
  const name = fullName
    ? user.name.first + " " + user.name.last
    : user.name.first;
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <Image
        src={user.picture.thumbnail}
        alt={name}
        width={width || 65}
        height={height || 65}
        className="rounded-full"
      />
      {!hideName && (
        <span className="text-sm font-medium text-center">{name}</span>
      )}
    </div>
  );
};

export default UserAvatar;
