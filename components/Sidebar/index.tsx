import Link from "next/link";
import React from "react";
import Clock from "../svg/Clock";
import Home from "../svg/Home";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Link href={"/"}>
        <Home></Home> Home
      </Link>
      <Link href={"#"}>
        <Clock></Clock> Schedule
      </Link>
    </aside>
  );
};

export default Sidebar;
