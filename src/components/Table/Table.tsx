import TableBodyRow from "./TableBodyRow";
import TableHeadCell from "./TableHeadCell";

import styles from "./Table.module.scss";

export default function Table() {
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
          <TableBodyRow
            data={{
              status: "Inactive",
              username: "Adedeji",
              organization: "Lendsqr",
              phoneNumber: "08078903721",
              email: "adedeji@lendsqr.com",
              dateJoined: new Date().toString(),
            }}
          />
          <TableBodyRow
            data={{
              status: "Pending",
              username: "Adedeji",
              organization: "Lendsqr",
              phoneNumber: "08078903721",
              email: "adedeji@lendsqr.com",
              dateJoined: new Date().toString(),
            }}
          />
          <TableBodyRow
            data={{
              status: "Blacklisted",
              username: "Adedeji",
              organization: "Lendsqr",
              phoneNumber: "08078903721",
              email: "adedeji@lendsqr.com",
              dateJoined: new Date().toString(),
            }}
          />
          <TableBodyRow
            data={{
              status: "Active",
              username: "Adedeji",
              organization: "Lendsqr",
              phoneNumber: "08078903721",
              email: "adedeji@lendsqr.com",
              dateJoined: new Date().toString(),
            }}
          />
        </tbody>
      </table>
    </div>
  );
}
