import { FC } from "react";
import LatestTransactions from "../transactions/LatestTransactions";
import RecentUsers from "../recentUsers/RecentUsers";

const Home: FC = () => {
  return (
    <section>
      <RecentUsers />
      <LatestTransactions />
    </section>
  );
};

export default Home;
