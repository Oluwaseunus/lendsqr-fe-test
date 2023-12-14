import dayjs from "dayjs";
import Image from "next/image";
import { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";

import StatusBadge, { StatusBadgeProps } from "../StatusBadge";

import styles from "./Table.module.scss";
import more from "@/assets/images/more.svg";
import TableMore from "./TableMore";

interface TableBodyRowProps {
  data: {
    email: string;
    username: string;
    dateJoined: string;
    phoneNumber: string;
    organization: string;
    status: StatusBadgeProps["value"];
  };
}

function TableBodyRow({
  data: { email, status, username, dateJoined, phoneNumber, organization },
}: TableBodyRowProps) {
  const [showMore, setShowMore] = useState(false);

  return (
    <tr className={styles.tableRow}>
      <td>{organization}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
      <td>{dayjs(new Date(dateJoined)).format("MMM D, YYYY h:mm A")}</td>
      <td>
        <StatusBadge value={status} />
      </td>
      <td>
        <Image
          src={more}
          alt="More"
          width={20}
          className={styles.moreImage}
          onClick={() => {
            setShowMore(!showMore);
          }}
        />

        {showMore && (
          <ClickAwayListener onClickAway={() => setShowMore(false)}>
            <TableMore />
          </ClickAwayListener>
        )}
      </td>
    </tr>
  );
}

export default TableBodyRow;
