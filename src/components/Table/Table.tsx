import TableBodyRow from "./TableBodyRow";
import TableHeadCell from "./TableHeadCell";

import styles from "./Table.module.scss";
import { UserInfo, fetcher } from "@/utils/constants";
import useSWR from "swr";
import { Dispatch, SetStateAction } from "react";
import PageError from "../PageError";

interface TableProps {
  page: number;
  size: number;
  isHidden?: boolean;
  setCount: Dispatch<SetStateAction<number>>;
}

export default function Table({ page, size, isHidden, setCount }: TableProps) {
  const {
    data: { data = [], count: interiorCount = 0 } = {},
    error,
    isLoading,
  } = useSWR<{ data: UserInfo[]; count: number }>(
    `/api/v1/users?page=${page}&size=${size}`,
    fetcher
  );

  setCount(interiorCount);

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
          {data.map((user) => (
            <TableBodyRow data={user} key={user.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
