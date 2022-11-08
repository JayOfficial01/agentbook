import React from "react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";

import UserOrbit from "../../public/images/orbit.png";

import styles from "./card.module.css";

function HorzontalCard(props) {
  const { heading, title, description, lists = [], direction } = props;
  return (
    <figure
      className={`container ${styles.horizontal__card__body} ${
        direction && styles.direction__left
      }`}
    >
      <picture className={styles.card__image__wrapper}>
        <Image src={UserOrbit} alt="Card Image" />
      </picture>

      <figcaption className={styles.card__details}>
        <h3 className={styles.card__heading}>{heading}</h3>
        <h2 className={styles.card__title}>{title}</h2>
        <p className={styles.card__description}>{description}</p>

        <ul className={styles.card__list}>
          {lists.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </ul>

        <button className={styles.find__button}>
          <span>
            <BsSearch />
          </span>
          Find an Agent
        </button>
      </figcaption>
    </figure>
  );
}

export default HorzontalCard;
