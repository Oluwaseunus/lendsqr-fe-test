import { PropsWithChildren } from "react";

import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

import styles from "./Layout.module.scss";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <div className={styles.layoutBody}>
        <Sidebar />
        <main>{children}</main>
      </div>
    </>
  );
}
