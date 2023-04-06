import Link from "next/link";
import React from "react";
import Clock from "../svg/Clock";
import Home from "../svg/Home";
import styles from "./BottomBar.module.scss";
const BottomBar = () => {
  return (
    <nav className={styles.bottomBar}>
      <Link href={"/"}>
        <Home></Home>
      </Link>
      <Link href={"#"}>
        <Clock></Clock>
      </Link>
    </nav>
  );
};

export default BottomBar;
