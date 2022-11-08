import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import styles from "./pagination.module.css";

function Pagintation() {
  return (
    <article className={styles.pagination}>
      <ul>
        <li>
          <a href="#">
            <BsChevronLeft />
          </a>
        </li>
        <li>
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">...</a>
        </li>
        <li>
          <a href="#">6</a>
        </li>
        <li>
          <a href="#">7</a>
        </li>
        <li>
          <a href="#">
            <BsChevronRight />
          </a>
        </li>
      </ul>
    </article>
  );
}

export default Pagintation;
