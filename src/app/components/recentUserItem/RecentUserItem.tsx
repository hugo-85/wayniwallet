import { FC } from "react";
import Link from "next/link";
import UserAvatar from "../userAvatar/UserAvatar";
import { UserType } from "@/app/types/userTypes";

interface RecentUserItemProps {
  user: UserType;
}

const RecentUserItem: FC<RecentUserItemProps> = ({ user }) => {
  return (
    <li className="min-w-[70px] cursor-pointer">
      <Link href={`/send/${user.id.value}`}>
        <UserAvatar user={user} />
      </Link>
    </li>
  );
};

export default RecentUserItem;
