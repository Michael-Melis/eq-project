import { Link } from "react-router-dom";
import {
  StyledNav,
  StyledLogo,
  StyledNavOptions,
  StyledLogoutButton,
} from "./StyledNav";
import { signOut } from "@firebase/auth";
import { auth } from "../../firebase-config";
import { Logout } from "@mui/icons-material";

export const Nav = ({ user }) => {
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <StyledNav>
      <StyledLogo>
        {!user ? (
          <li>
            <Link to="/">Login</Link>
          </li>
        ) : (
          <div>
            {user?.email}
            <StyledLogoutButton onClick={logout}>
              <Logout />
            </StyledLogoutButton>
          </div>
        )}
      </StyledLogo>
      <StyledNavOptions>
        {!user ? (
          ""
        ) : (
          <li>
            <Link to="/">Main menu</Link>
          </li>
        )}
      </StyledNavOptions>
    </StyledNav>
  );
};
