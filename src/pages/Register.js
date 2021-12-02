import { StyledTextField } from "../muiStyles/LoginStyles/StyledTextField";
import { StyledRegisterBox } from "../muiStyles/RegisterStyles/StyledRegisterBox";
import { StyledLoginButton } from "../muiStyles/LoginStyles/StyledLoginButton";
import { useForm, useWatch, Control, Controller } from "react-hook-form";

const Register = () => {
  return (
    <StyledRegisterBox>
      <StyledTextField label="Name" type="text" />
      <StyledTextField label="Surname" type="text" />
      <StyledTextField label="Email address" type="email" />
      <StyledTextField label="Confirm email address" type="email" />
      <StyledTextField label="Password" type="password" />
      <StyledTextField label="Confirm password" type="password" />
      <StyledLoginButton>Submit</StyledLoginButton>
    </StyledRegisterBox>
  );
};

export default Register;
