import React from "react";
import Card from "../Card/Card";

import styles from "./sectionWrapper.module.css";
import Pagintation from "../Pagination/Pagintation";

function SectionWrapper(props) {
  const { heading, description, agents = [] } = props;
  return (
    <article className={`container ${styles.section__wrapper}`}>
      <h2 className={styles.section__title}>{heading}</h2>
      {description && (
        <p className={styles.section__description}>{description}</p>
      )}

      <article className={styles.agents__wrapper}>
        {agents.map((agent, index) => (
          <Card cardType="agentCard" key={index} {...agent} />
        ))}
      </article>

      <Pagintation />
    </article>
  );
}

export default SectionWrapper;
