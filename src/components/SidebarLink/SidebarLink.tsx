import cx from "clsx";
import Link from "next/link";
import Image from "next/image";
import styles from "./SidebarLink.module.scss";

interface SidebarLinkProps {
  icon: string;
  text: string;
  href?: string;
  isActive?: boolean;
  fullColour?: boolean;
}

function SidebarLink({
  icon,
  text,
  isActive,
  href = "#",
  fullColour,
}: SidebarLinkProps) {
  const className = cx({
    [styles.sidebarLink]: true,
    [styles.isActive]: isActive,
    [styles.fullColour]: fullColour,
  });

  return (
    <Link href={href} className={className}>
      <Image src={icon} width={16} alt={text} />

      <span>{text}</span>
    </Link>
  );
}

export default SidebarLink;
