import { StyledLoginButton } from "../../muiStyles/LoginStyles/StyledLoginButton";
import { StyledLoginBox } from "../../muiStyles/LoginStyles/StyledLoginBox";
import { StyledTextField } from "../../muiStyles/LoginStyles/StyledTextField";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <StyledLoginBox>
      <StyledTextField label="Email adress" />
      <StyledTextField label="Password" />
      <StyledLoginButton>Log in</StyledLoginButton>
      <Link to="/register">Don't have an account?</Link>
    </StyledLoginBox>
  );
};

export default Login;
