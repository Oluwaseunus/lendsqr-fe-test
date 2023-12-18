import Link from "next/link";
import Image from "next/image";
import ClickAwayListener from "react-click-away-listener";

import type { UserInfo } from "@/utils/constants";

import styles from "./Table.module.scss";
import view from "@/assets/images/view.svg";
import deleteFriend from "@/assets/images/deleteFriend.svg";
import activateUser from "@/assets/images/activateUser.svg";

interface TableMoreProps {
  user: UserInfo;
  onClickAway: () => void;
}

export default function TableMore({ user, onClickAway }: TableMoreProps) {
  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <div className={styles.tableMore}>
        <ul className={styles.tableMoreList}>
          <li>
            <Link href={`/dashboard/users/${user.id}`}>
              <Image src={view} alt="View Details" width={16} />
              <span>View Details</span>
            </Link>
          </li>

          <li>
            <button>
              <Image src={deleteFriend} alt="Blacklist User" width={16} />
              <span>Blacklist User</span>
            </button>
          </li>

          <li>
            <button>
              <Image src={activateUser} alt="Activate User" width={16} />
              <span>Activate User</span>
            </button>
          </li>
        </ul>
      </div>
    </ClickAwayListener>
  );
}
