import { StyledLoginButton } from "../../muiStyles/LoginStyles/StyledLoginButton";
import { StyledLoginBox } from "../../muiStyles/LoginStyles/StyledLoginBox";
import { StyledTextField } from "../../muiStyles/LoginStyles/StyledTextField";
import { useState } from "react";
import ModalDialog from "../ModalDialog/ModalDialog";

const Login = ({ userData }) => {
  // declare a new state variable for modal open
  const [open, setOpen] = useState(false);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledLoginBox>
      <StyledTextField label="Email adress" />
      <StyledTextField label="Password" />
      <StyledLoginButton>Log in</StyledLoginButton>
      <StyledLoginButton variant="outlined" onClick={handleOpen}>
        Sign up
      </StyledLoginButton>
      {/* // display the modal and pass props */}
      <ModalDialog open={open} handleClose={handleClose} userData={userData} />
    </StyledLoginBox>
  );
};

export default Login;
