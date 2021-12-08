import React from "react";
import { StyledMenuView } from "../../styles/MenuView/StyledMenuView";
import { Link } from "react-router-dom";

const MenuView = () => {
  return (
    <StyledMenuView>
      <Link to="/earthquakes">List of eartquakes </Link>
    </StyledMenuView>
  );
};

export default MenuView;
