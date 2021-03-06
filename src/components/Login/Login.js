import { StyledLoginButton } from "../../styles/LoginStyles/StyledLoginButton";
import { StyledLoginBox } from "../../styles/LoginStyles/StyledLoginBox";
import { StyledTextField } from "../../styles/LoginStyles/StyledTextField";
import { useState } from "react";
import ModalDialog from "../ModalDialog/ModalDialog";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase-config";

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const Login = ({}) => {
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
    const login = async () => {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
      } catch (error) {
        console.log(error.message);
      }
    };
    login();
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
        <StyledLoginButton type="submit">Login</StyledLoginButton>

        <StyledLoginButton variant="outlined" onClick={handleOpen}>
          Sign up
        </StyledLoginButton>

        <ModalDialog open={open} handleClose={handleClose} />
      </StyledLoginBox>
    </form>
  );
};

export default Login;
