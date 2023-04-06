import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import logo from "../../public/img/logo.png";
import Burger from "../svg/Burger";
import styles from "./Nav.module.scss";
type Props = {};
const Nav: React.FC = (props: Props) => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <nav
      className={`${
        sideMenuOpen ? `${styles.nav} ${styles.open}` : styles.nav
      }`}
    >
      <div className={`container ${styles.wrapper}`}>
        <Link href={"/"} className={styles.logo}>
          <Image src={logo} alt="logo"></Image>
        </Link>
        <ul className={styles.links}>
          <li>
            <Link
              className={router.pathname === "/" ? styles.active : ""}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={router.pathname === "#" ? styles.active : ""}
              href="#"
            >
              Profile
            </Link>
          </li>
        </ul>
        <div onClick={() => setSideMenuOpen(!sideMenuOpen)} id={styles.burger}>
          <Burger></Burger>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
