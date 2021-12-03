import { StyledLoginButton } from "../../muiStyles/LoginStyles/StyledLoginButton";
import { StyledLoginBox } from "../../muiStyles/LoginStyles/StyledLoginBox";
import { StyledTextField } from "../../muiStyles/LoginStyles/StyledTextField";
import { useState } from "react";
import ModalDialog from "../ModalDialog/ModalDialog";
import { useForm, Controller } from "react-hook-form";

const Login = ({ userData }) => {
  const { handleSubmit, control } = useForm();
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

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <StyledLoginBox>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          placeholder="Email address"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "invalid email address",
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <StyledTextField
              label="Email adress"
              type="email"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{ required: "Email is required" }}
        />

        <Controller
          name="password"
          control={control}
          defaultValue=""
          placeholder="Password"
          rules={{
            required: "Password is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "invalid password",
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <StyledTextField
              label="Password"
              type="password"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{ required: "Password is required" }}
        />
        <StyledLoginButton type="submit">Log in</StyledLoginButton>

        <StyledLoginButton variant="outlined" onClick={handleOpen}>
          Sign up
        </StyledLoginButton>
        {/* // display the modal and pass props */}
        <ModalDialog
          open={open}
          handleClose={handleClose}
          userData={userData}
        />
      </StyledLoginBox>
    </form>
  );
};

export default Login;
