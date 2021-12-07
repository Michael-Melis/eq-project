import { Link } from "react-router-dom";
import { StyledNav, StyledLogo, StyledNavOptions } from "./StyledNav";
import { signOut } from "@firebase/auth";
import { auth } from "../../firebase-config";

export const Nav = ({ user }) => {
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <StyledNav>
      <StyledLogo>
        {!user ? (
          ""
        ) : (
          <div>
            <li>{user?.email}</li>
            <button onClick={logout}>signout</button>
          </div>
        )}
      </StyledLogo>
      <StyledNavOptions>
        {!user ? (
          ""
        ) : (
          <li>
            <Link to="/earthquakes">Earthquakes</Link>
          </li>
        )}
      </StyledNavOptions>
    </StyledNav>
  );
};
