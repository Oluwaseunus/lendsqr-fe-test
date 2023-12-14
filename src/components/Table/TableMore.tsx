import styles from "./Table.module.scss";

import view from "@/assets/images/view.svg";
import deleteFriend from "@/assets/images/deleteFriend.svg";
import activateUser from "@/assets/images/activateUser.svg";
import Image from "next/image";

export default function TableMore() {
  return (
    <div className={styles.tableMore}>
      <ul className={styles.tableMoreList}>
        <li>
          <button>
            <Image src={view} alt="View Details" width={16} />
            <span>View Details</span>
          </button>
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
  );
}
