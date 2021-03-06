import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #252525;
  width: 100%;
  height: 5vh;
  position: sticky;
  top: 0;
  align-items: center;
  z-index: 5;
  color: #fff;
`;
export const StyledLogo = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  margin: 0 1rem;
  padding: 0;
  li {
    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;

export const StyledNavOptions = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  margin: 0 1rem;
  padding: 0;
  li {
    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;

export const StyledLogoutButton = styled(Button)`
  color: #fff;
  svg {
    margin-left: 1rem;
  }
`;
