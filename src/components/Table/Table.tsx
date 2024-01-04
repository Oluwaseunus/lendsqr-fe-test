import useSWR from "swr";
import { Dispatch, SetStateAction, useEffect } from "react";

import PageError from "../PageError";
import TableBodyRow from "./TableBodyRow";
import TableHeadCell from "./TableHeadCell";
import { useFilter } from "../FilterForm/FilterProvider";

import { UserInfo, fetcher } from "@/utils/constants";

import styles from "./Table.module.scss";

interface TableProps {
  page: number;
  size: number;
  isHidden?: boolean;
  setPage: Dispatch<SetStateAction<number>>;
  setCount: Dispatch<SetStateAction<number>>;
}

export default function Table({
  page,
  size,
  setPage,
  isHidden,
  setCount,
}: TableProps) {
  const { formState } = useFilter();

  useEffect(() => {
    setPage(1);
  }, [setPage, formState]);

  const {
    data: { data = [], count: interiorCount = 0 } = {},
    error,
    isLoading,
  } = useSWR<{ data: UserInfo[]; count: number }>(
    `/api/v1/users?page=${page}&size=${size}&${new URLSearchParams(
      formState
    ).toString()}`,
    fetcher
  );

  useEffect(() => {
    if (!interiorCount) return;
    setCount(interiorCount);
  }, [setCount, interiorCount]);

  if (isHidden) return null;

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    return <PageError />;
  }

  return (
    <div
      className={styles.tableContainer}
      style={{ display: isHidden ? "none" : "block" }}
    >
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableRow}>
            <TableHeadCell text="Organization" />

            <TableHeadCell text="Username" />

            <TableHeadCell text="Email" />

            <TableHeadCell text="Phone Number" />

            <TableHeadCell text="Date Joined" />

            <TableHeadCell text="Status" />

            <td>&nbsp;</td>
          </tr>
        </thead>

        <tbody className={styles.tableBody}>
          {data.length ? (
            data.map((user) => <TableBodyRow data={user} key={user.id} />)
          ) : (
            <tr>
              <td colSpan={7} style={{ textAlign: "center" }}>
                No results to show.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
