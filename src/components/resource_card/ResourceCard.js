import React from "react";
import "./reviewcard.scss";
import "./resource-card.scss";

const ResourceCard = ({ colLength, post }) => {
  post = post.node;

  const category = post.categories[0].name.split(" ").join("-");

  function createMarkup() {
    return {
      __html: post.excerpt,
    };
  }

  return (
    <div className={"card " + colLength + " " + category.toLowerCase()}>
      <div className="top-img">
        <img src={post.featured_media.localFile.url} alt="feat img thumbnail" />
      </div>
      <div className="card-text">
        <a href={"/" + post.slug}>
          <h3>{post.title}</h3>
        </a>
        <div className="excerpt">
          <p dangerouslySetInnerHTML={createMarkup()} />
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
