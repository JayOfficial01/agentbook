import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../../public/images/logo.png";
import Flag from "../../public/images/flags/flag.png";
import ProfileImage from "../../public/images/users/dave-lordsky.png";

import {
  BsList,
  BsFillPersonFill,
  BsFillLockFill,
  BsBoxArrowLeft,
} from "react-icons/bs";

import styles from "./navbar.module.css";

const ProfileDropDown = () => {
  return (
    <article className={styles.profile__dropdown}>
      <article className={styles.profile__wrapper}>
        <span className={styles.hamburger__icon}>
          <BsList />
        </span>

        <Image src={ProfileImage} alt="Profile Image" />
      </article>

      <article className={styles.dropdown}>
        <ul>
          <li>
            <a href="">
              <span className={styles.icon}>
                <BsFillPersonFill />
              </span>
              <p className={styles.menu__link__text}>My Profile</p>
            </a>
          </li>
          <li>
            <a href="">
              <span className={styles.icon}>
                <BsFillLockFill />
              </span>
              <p className={styles.menu__link__text}>Change Password</p>
            </a>
          </li>
          <li>
            <a href="">
              <span className={styles.icon}>
                <BsBoxArrowLeft />
              </span>
              <p className={styles.menu__link__text}>Logout</p>
            </a>
          </li>
        </ul>
      </article>
    </article>
  );
};

function Navbar() {
  const [navbarActive, setNavbarActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 50) {
        setNavbarActive(false);
      } else {
        setNavbarActive(true);
      }
    });
  }, []);

  return (
    <nav
      className={
        navbarActive
          ? `${styles.navbar} ${styles.navbar__active}`
          : styles.navbar
      }
    >
      <article className={`container ${styles.navbar__container}`}>
        <Link href="/" className={styles.logo__wrapper}>
          <Image src={Logo} alt="Site Logo" />
        </Link>

        <article className={styles.profile__section}>
          <article className={styles.flag}>
            <Image src={Flag} alt="Country Flag" />
          </article>
          <ProfileDropDown />
        </article>
      </article>
    </nav>
  );
}

export default Navbar;
