import React from "react";
import {
  BsFillCalendarDateFill,
  BsFillBookFill,
  BsFillTagFill,
} from "react-icons/bs";

import styles from "./card.module.css";

function BlogCard(props) {
  const { date, readTime, image, title, publisherImg, publisherName, status } =
    props;
  return (
    <a href="" className={styles.blog__card__wrapper}>
      <article className={styles.blog__card__header}>
        <article className={styles.publish__date}>
          <span>
            <BsFillCalendarDateFill />
          </span>
          <p>{date}</p>
        </article>

        <article className={styles.read__guide}>
          <span>
            <BsFillBookFill />
          </span>
          <p>{readTime} MIN READ</p>
        </article>
      </article>

      <picutre className={styles.blog__image__wrapper}>
        <img src={image} alt={title} />
      </picutre>

      <figcaption className={styles.blog__card__details}>
        <h3 className={styles.blog__heading}>{title}</h3>

        <article className={styles.card__footer}>
          <article className={styles.publish__by}>
            <img src={publisherImg} alt={publisherName} />
            <p className={styles.publisher__name}>{publisherName} </p>
          </article>

          <article className={styles.tag__details}>
            <span>
              <BsFillTagFill />
            </span>
            <p>{status}</p>
          </article>
        </article>
      </figcaption>
    </a>
  );
}

export default BlogCard;
