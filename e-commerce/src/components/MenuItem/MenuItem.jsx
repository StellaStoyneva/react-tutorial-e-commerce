import React from "react";
import "./menu-item.styles.scss";
import { useHistory } from "react-router-dom";

export function MenuItem({ size, imageUrl, title, linkUrl, match }) {
  const { history } = useHistory();
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`${size}menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}
