import React from "react";
import { StyledMenuView } from "../../styles/MenuView/StyledMenuView";
import { Link } from "react-router-dom";

const MenuView = () => {
  return (
    <StyledMenuView>
      <Link to="/userdetails">My details </Link>
      <Link to="/earthquakes">Eartquake finder </Link>
      <Link to="/todolists">My todo lists </Link>
    </StyledMenuView>
  );
};

export default MenuView;
