import React from "react";
import "./styles.js";
import { MenuItem } from "../MenuItem";
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { DirectoryMenuContainer } from './styles';
import { useSelector } from "react-redux";

const Directory = () => {
const sections = useSelector(selectDirectorySections)
return(
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);}

export default Directory;
