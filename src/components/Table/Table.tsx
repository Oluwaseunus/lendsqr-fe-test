import TableBodyRow from "./TableBodyRow";
import TableHeadCell from "./TableHeadCell";

import styles from "./Table.module.scss";
import { UserInfo } from "@/utils/constants";

interface TableProps {
  data: UserInfo[];
}

export default function Table({ data }: TableProps) {
  return (
    <div className={styles.tableContainer}>
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
