import React from "react";

import AgentCard from "./AgentCard";
import BlogCard from "./BlogCard";
import HorzontalCard from "./HorzontalCard";

function Card(props) {
  const { cardType } = props;

  switch (cardType) {
    case "agentsCard":
      return <AgentCard {...props} />;

    case "horizontalCard":
      return <HorzontalCard {...props} />;

    case "blogCard":
      return <BlogCard {...props} />;

    default:
      return <AgentCard {...props} />;
  }
}

export default Card;
