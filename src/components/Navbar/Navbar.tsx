import Link from "next/link";
import Image from "next/image";

import Button from "../Button";
import logo from "@/assets/images/logo.svg";
import search from "@/assets/images/search.svg";
import profile from "@/assets/images/profile.png";
import dropdown from "@/assets/images/dropdown.svg";
import notification from "@/assets/images/notification.svg";

import styles from "./Navbar.module.scss";
import { workSans } from "@/app/fonts";

export default function NavBar() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Image src={logo} alt="Lendsqr" width={145} />
        </div>

        <div className={styles.inputContainer}>
          <input
            type="text"
            name="search"
            className={workSans.className}
            placeholder="Search for anything"
          />
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
      </div>
    </nav>
  );
}
