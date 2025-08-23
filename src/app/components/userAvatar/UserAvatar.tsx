import { FC } from "react";
import Image from "next/image";
import { UserType } from "@/app/types/userTypes";

interface UserAvatarProps {
  user: UserType;
  fullName?: boolean;
}

const UserAvatar: FC<UserAvatarProps> = ({ user, fullName }) => {
  const name = fullName
    ? user.name.first + " " + user.name.last
    : user.name.first;
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <Image
        src={user.picture.thumbnail}
        alt={name}
        width={65}
        height={65}
        className="rounded-full"
      />
      <span className="text-sm font-medium text-center">{name}</span>
    </div>
  );
};

export default UserAvatar;
