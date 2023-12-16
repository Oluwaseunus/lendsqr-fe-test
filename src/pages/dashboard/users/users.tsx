import Image from "next/image";
import { ReactElement, useMemo } from "react";

import Table from "@/components/Table";
import Layout from "@/components/Layout";
import DashboardInfoCard from "@/components/DashboardInfoCard";

import { users, UserInfo } from "@/utils/constants";

import styles from "./users.module.scss";
import npUsers from "@/assets/images/npUsers.svg";
import npLoans from "@/assets/images/npLoans.svg";
import npMoney from "@/assets/images/npMoney.svg";
import npActiveUsers from "@/assets/images/npActiveUsers.svg";

function Users() {
  const data: UserInfo[] = useMemo(() => {
    return users;
  }, []);

  return (
    <div className={styles.usersContainer}>
      <h1 className={styles.usersHeader}>Users</h1>

      <section className={styles.usersInfoCards}>
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
        <Table data={data} />
      </section>
    </div>
  );
}

Users.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Users;
