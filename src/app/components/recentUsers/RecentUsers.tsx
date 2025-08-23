"use client";

import { FC } from "react";
import { useRecentUsers } from "@/app/hooks/useRecentUsers";
import RecentUserItem from "../recentUserItem/RecentUserItem";

const RecentUsers: FC = () => {
  const { data } = useRecentUsers();

  return (
    <div className="pb-8">
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
