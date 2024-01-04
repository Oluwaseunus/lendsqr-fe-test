import React from "react";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import { ReactElement, useCallback, useState } from "react";

import Table from "@/components/Table";
import Layout from "@/components/Layout";
import withAuth from "@/components/withAuth";
import DashboardInfoCard from "@/components/DashboardInfoCard";
import FilterProvider from "@/components/FilterForm/FilterProvider";

import styles from "./users.module.scss";
import next from "@/assets/images/next.svg";
import npUsers from "@/assets/images/npUsers.svg";
import npLoans from "@/assets/images/npLoans.svg";
import npMoney from "@/assets/images/npMoney.svg";
import npActiveUsers from "@/assets/images/npActiveUsers.svg";

function Users() {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [count, setCount] = useState(0);

  const lastPage = Math.ceil(count / size);

  const handleClick = useCallback(
    ({ nextSelectedPage }: { nextSelectedPage?: number }) => {
      if (nextSelectedPage === undefined) return;

      setPage(nextSelectedPage + 1);
      return false;
    },
    []
  );

  return (
    <FilterProvider>
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
          <Table
            page={page}
            size={size}
            setPage={setPage}
            setCount={setCount}
          />

          <Table
            isHidden
            size={size}
            page={page + 1}
            setPage={setPage}
            setCount={setCount}
          />

          <div className={styles.pagination}>
            <div className={styles.paginationLeft}>
              <p>Showing</p>

              <div className={styles.selectContainer}>
                <select
                  defaultValue={size}
                  onChange={(event) => {
                    setPage(1);
                    setSize(+event.target.value);
                  }}
                >
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>

                <div className={styles.chevronContainer}>
                  <Image src={next} alt="More Options" width={14} />
                </div>
              </div>

              <p>out of {size}</p>
            </div>

            <div className={styles.paginationRight}>
              <ReactPaginate
                forcePage={page - 1}
                pageCount={lastPage}
                activeClassName={styles.selectedListItem}
                className={styles.reactPaginate}
                // onPageChange={handlePageChange}
                onClick={handleClick}
                previousLabel={
                  <button
                    disabled={page === 1}
                    className={styles.prevButton}
                    onClick={() => setPage(page - 1)}
                  >
                    <Image
                      width={14}
                      src={next}
                      alt="Previous"
                      style={{ transform: "rotate(90deg)" }}
                    />
                  </button>
                }
                nextLabel={
                  <button
                    disabled={page === lastPage}
                    className={styles.nextButton}
                    onClick={() => setPage(page + 1)}
                  >
                    <Image
                      width={14}
                      src={next}
                      alt="Next"
                      style={{ transform: "rotate(-90deg)" }}
                    />
                  </button>
                }
              />
            </div>
          </div>
        </section>
      </div>
    </FilterProvider>
  );
}

Users.getLayout = (page: ReactElement) => {
  return withAuth(<Layout>{page}</Layout>);
};

export default Users;
