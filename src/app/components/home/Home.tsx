import { FC } from "react";
import LatestTransactions from "../transactions/LatestTransactions";
import RecentUsers from "../recentUsers/RecentUsers";

const Home: FC = () => {
  return (
    <section className="flex flex-col max-h-[calc(100%-30px)]">
      <RecentUsers />
      <LatestTransactions />
    </section>
  );
};

export default Home;
