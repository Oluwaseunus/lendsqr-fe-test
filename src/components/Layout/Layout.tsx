import { PropsWithChildren, useEffect, useState } from "react";

import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

import styles from "./Layout.module.scss";

export default function Layout({ children }: PropsWithChildren) {
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const listener = () => {
      setShowSidebar(window.innerWidth > 1024);
    };

    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, []);

  return (
    <>
      <Navbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />

      <div className={styles.layoutBody}>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <main>{children}</main>
      </div>
    </>
  );
}
