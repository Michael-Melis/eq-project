import React from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import { useForm, Controller } from "react-hook-form";
import {
  StyledRegisterForm,
  StyledRegField,
  StyledRegButton,
  StyledCancelRegButton,
} from "../../muiStyles/RegisterStyles/StyledRegister";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase-config";

const api = "https://61a669a58395690017be92b4.mockapi.io/register";

const schema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  email: yup.string().required(),
  confirmEmail: yup
    .string()
    .oneOf([yup.ref("email"), null], "Email  must match"),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Form = ({ handleClose }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${api}`, {
        userID: nanoid(),
        name: data.name,
        surname: data.surname,
        email: data.email,
        confirmEmail: data.confirmEmail,
        isLogged: false,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    const register = async () => {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        console.log(user);
      } catch (error) {
        console.log(error.message);
      }
    };
    register();
    handleClose();
  };

  return (
    <StyledRegisterForm onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <StyledRegField
            {...field}
            label="First Name"
            variant="filled"
            type="text"
            error={!!errors.text}
            helperText={errors ? errors.text?.message : null}
          />
        )}
      />
      <Controller
        name="surname"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <StyledRegField
            {...field}
            label="Last name"
            variant="filled"
            type="text"
            error={!!errors.text}
            helperText={errors ? errors.text?.message : null}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <StyledRegField
            {...field}
            label="Email address"
            type="email"
            variant="filled"
            error={!!errors.email}
            helperText={errors ? errors.email?.message : null}
          />
        )}
      />

      <Controller
        name="confirmEmail"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <StyledRegField
            {...field}
            label="Confirm email address"
            type="email"
            variant="filled"
            error={!!errors.confirmEmail}
            helperText={errors ? errors.confirmEmail?.message : null}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <StyledRegField
            {...field}
            label="Password"
            type="password"
            variant="filled"
            error={!!errors.password}
            helperText={errors ? errors.password?.message : null}
          />
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <StyledRegField
            {...field}
            label="Confirm password"
            type="password"
            variant="filled"
            error={!!errors.confirmPassword}
            helperText={errors ? errors.confirmPassword?.message : null}
          />
        )}
      />
      <div>
        <StyledCancelRegButton variant="contained" onClick={handleClose}>
          Cancel
        </StyledCancelRegButton>
        <StyledRegButton
          // onClick={register}
          type="submit"
          variant="contained"
          color="primary"
        >
          Signup
        </StyledRegButton>
      </div>
    </StyledRegisterForm>
  );
};

export default Form;
