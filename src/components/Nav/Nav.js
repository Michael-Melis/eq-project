import { Link } from "react-router-dom";
import { StyledNav, StyledLogo, StyledNavOptions } from "./StyledNav";

export const Nav = () => {
  return (
    <StyledNav>
      <StyledLogo>
        <li>
          <Link to="/">Project-Eartquake</Link>
        </li>
      </StyledLogo>
      <StyledNavOptions>
        <li>
          <Link to="/showmeeartquakes">Eartquakes</Link>
        </li>
      </StyledNavOptions>
    </StyledNav>
  );
};
