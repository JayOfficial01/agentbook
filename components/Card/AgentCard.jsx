import React from "react";
import { BsFillStarFill } from "react-icons/bs";

import styles from "./card.module.css";

function AgentCard(props) {
  const { image, name, description } = props;
  return (
    <figure className={styles.agent__card__body}>
      <picture className={styles.agent__card__image}>
        <img src={image} alt={name} />
      </picture>

      <figcaption className={styles.agent__card__description}>
        <article className={styles.agent__card__header}>
          <h3 className={styles.agent__name}>{name}</h3>

          <article className={styles.agent__ranking}>
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />

            <p className={styles.agent__ranking__count}>5.0</p>
          </article>
        </article>
        <p className={styles.agent__description}>
          {description}
          <span>...More</span>
        </p>

        <button>Contact Agent</button>
      </figcaption>
    </figure>
  );
}

export default AgentCard;
