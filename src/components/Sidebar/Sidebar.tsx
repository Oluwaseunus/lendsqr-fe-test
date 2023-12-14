import SidebarLink from "../SidebarLink";

import home from "@/assets/images/home.svg";
import sack from "@/assets/images/sack.svg";
import bank from "@/assets/images/bank.svg";
import tire from "@/assets/images/tire.svg";
import users from "@/assets/images/users.svg";
import galaxy from "@/assets/images/galaxy.svg";
import scroll from "@/assets/images/scroll.svg";
import userCog from "@/assets/images/userCog.svg";
import sliders from "@/assets/images/sliders.svg";
import barChart from "@/assets/images/barChart.svg";
import handshake from "@/assets/images/handshake.svg";
import userCheck from "@/assets/images/userCheck.svg";
import userTimes from "@/assets/images/userTimes.svg";
import briefcase from "@/assets/images/briefcase.svg";
import piggyBank from "@/assets/images/piggy-bank.svg";
import coinsSolid from "@/assets/images/coinsSolid.svg";
import handHolding from "@/assets/images/handHolding.svg";
import userFriends from "@/assets/images/user-friends.svg";
import transactions from "@/assets/images/transactions.svg";
import badgePercent from "@/assets/images/badgePercent.svg";
import clipboardList from "@/assets/images/clipboardList.svg";

import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <aside className={styles.aside}>
      <div className={styles.sidebarLinkContainer}>
        <SidebarLink icon={briefcase} text="Switch Organization" />
      </div>

      <div className={styles.sidebarLinkContainer}>
        <SidebarLink icon={home} text="Dashboard" />
      </div>

      <div className={styles.sidebarLinkContainer}>
        <p className={styles.sidebarHeading}>Customers</p>

        <SidebarLink icon={userFriends} text="Users" fullColour isActive />
        <SidebarLink icon={users} text="Guarantors" />
        <SidebarLink icon={sack} text="Loans" />
        <SidebarLink icon={handshake} text="Decision Models" />
        <SidebarLink icon={piggyBank} text="Savings" />
        <SidebarLink icon={handHolding} text="Loan Requests" />
        <SidebarLink icon={userCheck} text="Whitelist" />
        <SidebarLink icon={userTimes} text="Karma" />
      </div>

      <div className={styles.sidebarLinkContainer}>
        <p className={styles.sidebarHeading}>Businesses</p>

        <SidebarLink icon={briefcase} text="Organization" />
        <SidebarLink icon={handHolding} text="Loan Products" />
        <SidebarLink icon={bank} text="Savings Products" />
        <SidebarLink icon={coinsSolid} text="Fees and Charges" />
        <SidebarLink icon={transactions} text="Transactions" />
        <SidebarLink icon={galaxy} text="Services" />
        <SidebarLink icon={userCog} text="Service Account" />
        <SidebarLink icon={scroll} text="Settlements" />
        <SidebarLink icon={barChart} text="Reports" />
      </div>

      <div className={styles.sidebarLinkContainer}>
        <p className={styles.sidebarHeading}>Settings</p>

        <SidebarLink icon={sliders} text="Preferences" />
        <SidebarLink icon={badgePercent} text="Fees and Pricing" />
        <SidebarLink icon={clipboardList} text="Audit Logs" />
        <SidebarLink icon={tire} text="Systems Messages" />
      </div>
    </aside>
  );
}
