import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";

import Layout from "@/components/Layout";

import back from "@/assets/images/back.svg";
import userSVG from "@/assets/images/user.svg";
import starFilled from "@/assets/images/starFilled.svg";
import starOutline from "@/assets/images/starOutline.svg";

import { formatMoney } from "@/utils/currency";
import { UserInfo, users } from "@/utils/constants";

import styles from "./SingleUserPage.module.scss";

function SingleUserPage() {
  const router = useRouter();

  const [user, setUser] = useState<UserInfo | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setUser(
        users.find((currentUser) => currentUser.id === router.query.id) || null
      );
    }, 1000);
  }, [router.query.id]);

  if (!user) return null;

  return (
    <div className={styles.singleUserPage}>
      <button
        type="button"
        className={clsx(styles.button, styles.singleUserPageBack)}
      >
        <Image src={back} alt="Back to Users" width={30} />
        <p>Back to Users</p>
      </button>

      <div className={styles.singleUserPageHeading}>
        <h1>User Details</h1>

        <div className={styles.singleUserPageHeadingButtons}>
          <button className={clsx(styles.button, styles.redButton)}>
            Blacklist User
          </button>

          <button className={clsx(styles.button, styles.primaryButton)}>
            Activate User
          </button>
        </div>
      </div>

      <section className={styles.userInfo}>
        <div className={styles.userProfile}>
          <div className={styles.userDetails}>
            <div className={styles.userDetailsImageContainer}>
              <Image src={userSVG} alt="" width={40} />
            </div>

            <div className={styles.userNameAndTag}>
              <h2>{user.username}</h2>
              <p>{user.tag}</p>
            </div>
          </div>
        </div>

        <div className={styles.userInfoDivider}></div>

        <div className={styles.userTier}>
          <p>User&apos;s Tier</p>
          <div>
            <Image src={starFilled} alt="Tier 1" width={16} />
            <Image src={starOutline} alt="Tier 1" width={16} />
            <Image src={starOutline} alt="Tier 1" width={16} />
          </div>
        </div>

        <div className={styles.userInfoDivider}></div>

        <div className={styles.userAccounts}>
          <p>{formatMoney(+user.balance)}</p>

          <span>
            {user.accountNumber}/{user.bank}
          </span>
        </div>
      </section>
    </div>
  );
}

SingleUserPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default SingleUserPage;
