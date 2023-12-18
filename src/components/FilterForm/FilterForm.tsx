import Image from "next/image";
import ClickAwayListener from "react-click-away-listener";

import Button from "../Button";

import styles from "./FilterForm.module.scss";
import shrink from "@/assets/images/shrink.svg";

interface FilterFormProps {
  handleClickAway: () => void;
}

function FilterForm({ handleClickAway }: FilterFormProps) {
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={styles.filterFormContainer}>
        <form className={styles.filterForm}>
          <div className={styles.filterFormGroup}>
            <label htmlFor="filterFormOrganization">Organization</label>
            <select id="filterFormOrganization" defaultValue="">
              <option value="" disabled>
                Select
              </option>
            </select>

            <div className={styles.filterFormSelectImageContainer}>
              <Image src={shrink} alt="View Options" width={14} />
            </div>
          </div>

          <div className={styles.filterFormGroup}>
            <label htmlFor="filterFormUsername">Username</label>
            <input id="filterFormUsername" type="text" placeholder="User" />
          </div>

          <div className={styles.filterFormGroup}>
            <label htmlFor="filterFormEmail">Email</label>
            <input id="filterFormEmail" type="email" placeholder="Email" />
          </div>

          <div className={styles.filterFormGroup}>
            <label htmlFor="filterFormDate">Date</label>
            <input id="filterFormDate" type="text" placeholder="Date" />
          </div>

          <div className={styles.filterFormGroup}>
            <label htmlFor="filterFormPhoneNumber">Phone Number</label>
            <input
              id="filterFormPhoneNumber"
              type="text"
              placeholder="Phone Number"
            />
          </div>

          <div className={styles.filterFormGroup}>
            <label htmlFor="filterFormStatus">Status</label>
            <select id="filterFormStatus" defaultValue="">
              <option value="" disabled>
                Select
              </option>
            </select>

            <div className={styles.filterFormSelectImageContainer}>
              <Image src={shrink} alt="View Options" width={14} />
            </div>
          </div>

          <div className={styles.filterFormActions}>
            <button>Reset</button>

            <Button type="submit" variant="primary">
              Filter
            </Button>
          </div>
        </form>
      </div>
    </ClickAwayListener>
  );
}

export default FilterForm;
