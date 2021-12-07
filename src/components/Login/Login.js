import { StyledLoginButton } from "../../muiStyles/LoginStyles/StyledLoginButton";
import { StyledLoginBox } from "../../muiStyles/LoginStyles/StyledLoginBox";
import { StyledTextField } from "../../muiStyles/LoginStyles/StyledTextField";
import { useState } from "react";
import ModalDialog from "../ModalDialog/ModalDialog";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const Login = ({ userData }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
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
          name="email"
          control={control}
          defaultValue=""
          placeholder="Email address"
          render={({ field }) => (
            <StyledTextField
              {...field}
              label="Email adress"
              type="email"
              error={!!errors.email}
              helperText={errors ? errors.email?.message : ""}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          defaultValue=""
          placeholder="Password"
          render={({ field }) => (
            <StyledTextField
              {...field}
              label="Password"
              type="password"
              error={!!errors.password}
              helperText={errors ? errors.password?.message : ""}
            />
          )}
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
