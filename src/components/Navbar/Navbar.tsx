import Image from "next/image";

import Button from "../Button";
import logo from "@/assets/images/logo.svg";
import search from "@/assets/images/search.svg";

import styles from "./Navbar.module.scss";
import { workSans } from "@/app/fonts";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
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
    </nav>
  );
}
