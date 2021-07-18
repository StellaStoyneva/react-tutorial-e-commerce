import React from "react";
import './directory.styles.scss';
import { sections } from "../../mocked-data";
import { MenuItem } from "../MenuItem";

export function Directory() {
  return (
    <div className='directory-menu'>
        {sections.map(({size, title, id, imageUrl, linkUrl}) => (<MenuItem key ={id} size={size} imgUrl = {imageUrl} title = {title} linkUrl={linkUrl}/>))}
    </div>
  );
}
