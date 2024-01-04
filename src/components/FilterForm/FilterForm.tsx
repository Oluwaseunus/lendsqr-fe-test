import useSWR from "swr";
import Image from "next/image";
import { useCallback, useState } from "react";
import ClickAwayListener from "react-click-away-listener";

import Button from "../Button";
import PageError from "../PageError";
import { initialFormState, useFilter } from "./FilterProvider";

import { fetcher } from "@/utils/constants";

import styles from "./FilterForm.module.scss";
import shrink from "@/assets/images/shrink.svg";

interface FilterFormProps {
  handleClickAway: () => void;
}

function FilterForm({ handleClickAway }: FilterFormProps) {
  const { formState, setFormState } = useFilter();
  const [localFormState, setLocalFormState] = useState(formState);

  const {
    error,
    isLoading,
    data: { data: organizations = [] } = {},
  } = useSWR<{ data: string[]; message: string }>(
    `/api/v1/organizations`,
    fetcher
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;

      setLocalFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [setLocalFormState]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      setFormState(localFormState);
    },
    [localFormState, setFormState]
  );

  const handleReset = useCallback(() => {
    setFormState(initialFormState);
    setLocalFormState(initialFormState);
  }, [setFormState]);

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    return (
      <PageError message="Failed to fetch organizations, please try again." />
    );
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={styles.filterFormContainer}>
        <form className={styles.filterForm} onSubmit={handleSubmit}>
          <div className={styles.filterFormGroup}>
            <label htmlFor="filterFormOrganization">Organization</label>
            <select
              defaultValue=""
              name="organization"
              onChange={handleChange}
              id="filterFormOrganization"
              value={localFormState.organization}
            >
              <option value="" disabled>
                Select
              </option>

              {organizations.map((organization) => (
                <option key={organization}>{organization}</option>
              ))}
            </select>

            <div className={styles.filterFormSelectImageContainer}>
              <Image src={shrink} alt="View Options" width={14} />
            </div>
          </div>

          <div className={styles.filterFormGroup}>
            <label htmlFor="filterFormUsername">Username</label>
            <input
              type="text"
              name="username"
              placeholder="User"
              id="filterFormUsername"
              onChange={handleChange}
              value={localFormState.username}
            />
          </div>

          <div className={styles.filterFormGroup}>
            <label htmlFor="filterFormEmail">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="filterFormEmail"
              value={localFormState.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.filterFormGroup}>
            <label htmlFor="filterFormDate">Date</label>
            <input
              type="date"
              name="date"
              placeholder="Date"
              id="filterFormDate"
              value={localFormState.date}
              onChange={handleChange}
            />
          </div>

          <div className={styles.filterFormGroup}>
            <label htmlFor="filterFormPhoneNumber">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              onChange={handleChange}
              id="filterFormPhoneNumber"
              placeholder="Phone Number"
              value={localFormState.phoneNumber}
            />
          </div>

          <div className={styles.filterFormGroup}>
            <label htmlFor="filterFormStatus">Status</label>
            <select
              name="status"
              defaultValue=""
              id="filterFormStatus"
              onChange={handleChange}
              value={localFormState.status}
            >
              <option value="" disabled>
                Select
              </option>

              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending</option>
              <option value="Blacklisted">Blacklisted</option>
              <option value="Active">Active</option>
            </select>

            <div className={styles.filterFormSelectImageContainer}>
              <Image src={shrink} alt="View Options" width={14} />
            </div>
          </div>

          <div className={styles.filterFormActions}>
            <button type="button" onClick={handleReset}>
              Reset
            </button>

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
