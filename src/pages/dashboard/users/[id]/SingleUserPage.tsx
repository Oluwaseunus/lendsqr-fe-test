import clsx from "clsx";
import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import relativeTime from "dayjs/plugin/relativeTime";
import { ReactElement, useEffect, useState } from "react";

import Layout from "@/components/Layout";

import back from "@/assets/images/back.svg";
import userSVG from "@/assets/images/user.svg";
import starFilled from "@/assets/images/starFilled.svg";
import starOutline from "@/assets/images/starOutline.svg";

import { formatMoney } from "@/utils/currency";
import { UserInfo, users } from "@/utils/constants";

import styles from "./SingleUserPage.module.scss";

dayjs.extend(relativeTime);

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
      <Link
        href="/dashboard/users"
        className={clsx(styles.button, styles.singleUserPageBack)}
      >
        <Image src={back} alt="Back to Users" width={30} />
        <p>Back to Users</p>
      </Link>

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

      <section className={styles.userInfoContainer}>
        <div className={styles.userInfo}>
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
        </div>

        <ul className={styles.tabs}>
          <li className={styles.activeTab}>
            <button>General Details</button>
          </li>

          <li>
            <button>Documents</button>
          </li>

          <li>
            <button>Bank Details</button>
          </li>

          <li>
            <button>Loans</button>
          </li>

          <li>
            <button>Savings</button>
          </li>

          <li>
            <button>App and System</button>
          </li>
        </ul>
      </section>

      <div className={styles.userFullDetails}>
        <section className={styles.detailsSection}>
          <h3>Personal Information</h3>

          <ul
            className={clsx(styles.sectionGrid, styles.personalInformationGrid)}
          >
            <li>
              <p>Full Name</p>
              <span>{user.username}</span>
            </li>
            <li>
              <p>Phone Number</p>
              <span>{user.phoneNumber}</span>
            </li>
            <li>
              <p>Email Address</p>
              <span>{user.email}</span>
            </li>
            <li>
              <p>BVN</p>
              <span>{user.bvn}</span>
            </li>
            <li>
              <p>Gender</p>
              <span>{user.gender}</span>
            </li>
            <li>
              <p>Marital Status</p>
              <span>{user.maritalStatus}</span>
            </li>
            <li>
              <p>Children</p>
              <span>{user.children || "None"}</span>
            </li>
            <li>
              <p>Type of Residence</p>
              <span>{user.username}</span>
            </li>
          </ul>
        </section>

        <div className={styles.sectionDivider} />

        <section className={styles.detailsSection}>
          <h3>Education and Employment</h3>

          <ul className={clsx(styles.sectionGrid, styles.educationGrid)}>
            <li>
              <p>Level of Education</p>
              <span>{user.levelOfEducation}</span>
            </li>
            <li>
              <p>Employment Status</p>
              <span>{user.employmentStatus}</span>
            </li>
            <li>
              <p>Sector of Employment</p>
              <span>{user.employmentSector}</span>
            </li>
            <li>
              <p>Duration of Employment</p>
              <span>{dayjs(user.dateJoined).fromNow(true)}</span>
            </li>
            <li>
              <p>Office Email</p>
              <span>{user.officeEmail}</span>
            </li>
            <li>
              <p>Monthly Income</p>
              <span>
                {user.monthlyIncome
                  .map((item) => formatMoney(item))
                  .join(" - ")}
              </span>
            </li>
            <li>
              <p>Loan Repayment</p>
              <span>{formatMoney(user.loanRepayment)}</span>
            </li>
          </ul>
        </section>

        <div className={styles.sectionDivider} />

        <section className={styles.detailsSection}>
          <h3>Socials</h3>

          <ul className={clsx(styles.sectionGrid, styles.socialsGrid)}>
            <li>
              <p>Twitter</p>
              <span>@{user.twitter}</span>
            </li>
            <li>
              <p>Facebook</p>
              <span>@{user.facebook}</span>
            </li>
            <li>
              <p>Instagram</p>
              <span>@{user.instagram}</span>
            </li>
          </ul>
        </section>

        <div className={styles.sectionDivider} />

        <section className={styles.detailsSection}>
          <h3>Guarantor</h3>

          <ul className={clsx(styles.sectionGrid, styles.guarantorGrid)}>
            <li>
              <p>Full Name</p>
              <span>{user.guarantor.fullName}</span>
            </li>
            <li>
              <p>Phone Number</p>
              <span>{user.guarantor.phoneNumber}</span>
            </li>
            <li>
              <p>Email Address</p>
              <span>{user.guarantor.email}</span>
            </li>
            <li>
              <p>Relationship</p>
              <span>{user.guarantor.relationship}</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

SingleUserPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default SingleUserPage;
