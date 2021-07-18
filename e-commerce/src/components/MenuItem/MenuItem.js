import React from "react";
import './menu-item.styles.scss'

export function MenuItem({ size, imageUrl, title, linkUrl }) {
  return (
    <div style={{backgroundImage: `url(${imageUrl})`}}className={`${size} menu-item`}>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}
