import React from "react";
import { BsSearch } from "react-icons/bs";

import styles from "./searchbar.module.css";

function Searchbar() {
  return (
    <article className={styles.searchbar}>
      <article className={styles.searchInput}>
        <span className={styles.searchIcon}>
          <BsSearch />
        </span>
        <input type="text" placeholder="Search..." />
      </article>

      <button>Search Agent</button>
    </article>
  );
}

export default Searchbar;
