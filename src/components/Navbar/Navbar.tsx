import Link from "next/link";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

import Button from "../Button";
import logo from "@/assets/images/logo.svg";
import burger from "@/assets/images/burger.svg";
import search from "@/assets/images/search.svg";
import profile from "@/assets/images/profile.png";
import dropdown from "@/assets/images/dropdown.svg";
import notification from "@/assets/images/notification.svg";

import styles from "./Navbar.module.scss";

interface NavBarProps {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}

export default function NavBar({ showSidebar, setShowSidebar }: NavBarProps) {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Image src={logo} alt="Lendsqr" width={145} />
        </div>

        <div className={styles.inputContainer}>
          <input type="text" name="search" placeholder="Search for anything" />
          <Button variant="primary">
            <Image src={search} width={14} alt="Search" />
          </Button>
        </div>

        <div className={styles.actions}>
          <Link href="#">Docs</Link>

          <Image src={notification} alt="Notifications" width={26} />

          <div className={styles.profile}>
            <Image width={48} height={48} src={profile} alt="Adedeji" />

            <p>Adedeji</p>

            <Image src={dropdown} alt="More" width={20} />
          </div>
        </div>

        <div className={styles.burger}>
          <Image
            width={24}
            src={burger}
            alt="Show Sidebar"
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </div>
      </div>
    </nav>
  );
}
