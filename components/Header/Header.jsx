import React from "react";

import Searchbar from "../SearchBar/Searchbar";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <article className={`container ${styles.headerContainer}`}>
        <h1>Find The Perfect Real Estate Agent</h1>
        <p>
          Make your search and sale easier and faster by connecting with one of
          <br />
          our expert local agent in your neighborhood
        </p>
        <Searchbar />
      </article>
    </header>
  );
}

export default Header;
