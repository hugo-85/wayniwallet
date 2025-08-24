"use client";

import { FC } from "react";
import { useRecentUsers } from "@/app/hooks/useRecentUsers";
import RecentUserItem from "../recentUserItem/RecentUserItem";
import AvatarSkeleton from "../skeletons/AvatarSkeleton";

const RecentUsers: FC = () => {
  const { data, isPending } = useRecentUsers();

  return (
    <div className="pb-8">
      {isPending && (
        <div className="flex gap-5">
          <AvatarSkeleton />
          <AvatarSkeleton />
          <AvatarSkeleton />
          <AvatarSkeleton />
          <AvatarSkeleton />
        </div>
      )}
      {data && (
        <ul className="flex flex-nowrap overflow-x-scroll w-full gap-5 scrollbar-hide">
          {data.map((user) => (
            <RecentUserItem key={user.id.value} user={user} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecentUsers;
