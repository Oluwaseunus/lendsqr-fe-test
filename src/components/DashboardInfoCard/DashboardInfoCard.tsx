import { hexToRGB } from "@/utils/color";
import styles from "./DashboardInfoCard.module.scss";

interface DashboardInfoCardProps {
  title: string;
  count: number;
  img: React.ReactNode;
  backgroundColor: string;
}

const DashboardInfoCard = ({
  img,
  title,
  count,
  backgroundColor,
}: DashboardInfoCardProps) => {
  return (
    <div className={styles.dashboardInfoCard}>
      <div
        className={styles.dashboardInfoIconContainer}
        // added the 1a to convert for 0.1 opacity
        style={{ backgroundColor: `${backgroundColor}1a` }}
      >
        {img}
      </div>

      <p className={styles.dashboardInfoTitle}>{title}</p>

      <p className={styles.dashboardInfoCount}>
        {Intl.NumberFormat("en-US").format(count)}
      </p>
    </div>
  );
};

export default DashboardInfoCard;
