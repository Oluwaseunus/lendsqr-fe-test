import Image from "next/image";
import { ReactElement } from "react";

import Table from "@/components/Table";
import Layout from "@/components/Layout";
import DashboardInfoCard from "@/components/DashboardInfoCard";

import { users } from "@/utils/constants";

import styles from "./dashboard.module.scss";
import npUsers from "@/assets/images/npUsers.svg";
import npLoans from "@/assets/images/npLoans.svg";
import npMoney from "@/assets/images/npMoney.svg";
import npActiveUsers from "@/assets/images/npActiveUsers.svg";

function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.dashboardHeader}>Users</h1>

      <section className={styles.dashboardInfoCards}>
        <DashboardInfoCard
          count={2453}
          title="Users"
          backgroundColor="#DF18FF"
          img={<Image src={npUsers} alt="Users" width={22} />}
        />

        <DashboardInfoCard
          count={2453}
          title="Active Users"
          backgroundColor="#5718FF"
          img={<Image src={npActiveUsers} alt="Users" width={22} />}
        />

        <DashboardInfoCard
          count={12453}
          title="Users with Loans"
          backgroundColor="#F55F44"
          img={<Image src={npLoans} alt="Users" width={22} />}
        />

        <DashboardInfoCard
          count={102453}
          title="Users with Savings"
          backgroundColor="#FF3366"
          img={<Image src={npMoney} alt="Users" width={22} />}
        />
      </section>

      <section>
        <Table data={users} />
      </section>
    </div>
  );
}

Dashboard.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Dashboard;
