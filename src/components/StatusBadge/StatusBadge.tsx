import styles from "./StatusBadge.module.scss";

export interface StatusBadgeProps {
  value: "Inactive" | "Pending" | "Blacklisted" | "Active";
}

export default function StatusBadge({ value }: StatusBadgeProps) {
  let color = "#000";

  switch (value) {
    case "Active":
      color = "#39CD62";
      break;

    case "Blacklisted":
      color = "#E4033B";
      break;

    case "Inactive":
      color = "#545F7D";
      break;

    case "Pending":
      color = "#E9B200";
      break;

    default:
      break;
  }

  return (
    <div
      className={styles.statusBadge}
      style={{ color, backgroundColor: `${color}1a` }}
    >
      <p>{value}</p>
    </div>
  );
}
