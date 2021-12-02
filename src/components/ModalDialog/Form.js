import React, { useState } from "react";
import styled from "styled-components";
import { TextField, Button } from "@mui/material";
import { StyledLoginButton } from "../../muiStyles/LoginStyles/StyledLoginButton";
import axios from "axios";
import { nanoid } from "nanoid";
import { useForm, Controller } from "react-hook-form";

const api = "https://61a669a58395690017be92b4.mockapi.io/register";

const Form = ({ handleClose }) => {
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${api}`, {
        userID: nanoid(),
        name: data.name,
        surname: data.surname,
        email: data.email,
        confirmEmail: data.confirmEmail,
        password: data.password,
        confirmPassword: data.confirmPassword,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }

    handleClose();
  };

  return (
    <StyledRegForm onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{ required: "First name required" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="First Name"
            variant="filled"
            type="text"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
        rules={{ required: "First name required" }}
      />
      <Controller
        name="surname"
        control={control}
        defaultValue=""
        rules={{ required: "Last name is required" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Last name"
            variant="filled"
            type="text"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
        rules={{ required: "Last name is required" }}
      />
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{ required: "Email is required" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Email address"
            type="email"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
        rules={{ required: "Email name is required" }}
      />

      <Controller
        name="confirmEmail"
        control={control}
        defaultValue=""
        rules={{ required: "Email is required" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Confirm email address"
            type="email"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
        rules={{ required: "Email name is required" }}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{ required: "Password is required" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Password"
            type="password"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
        rules={{ required: "Password is required" }}
      />
      <Controller
        name="confirmPassword"
        control={control}
        defaultValue=""
        rules={{ required: "Confirm password is required" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Confirm password"
            type="password"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
        rules={{ required: "Confirming password is required" }}
      />
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </StyledRegForm>
  );

  //   <StyledRegTextField
  //     label="Last Name"
  //     variant="filled"
  //     required
  //     value={lastName}
  //     onChange={(e) => setLastName(e.target.value)}
  //   />
  //   <StyledRegTextField
  //     label="Email"
  //     variant="filled"
  //     type="email"
  //     required
  //     value={email}
  //     onChange={(e) => setEmail(e.target.value)}
  //   />
  //   <StyledRegTextField
  //     label="Confirm email"
  //     variant="filled"
  //     type="email"
  //     required
  //     value={confirmEmail}
  //     onChange={(e) => setConfirmEmail(e.target.value)}
  //   />
  //   <StyledRegTextField
  //     label="Password"
  //     variant="filled"
  //     type="password"
  //     required
  //     value={password}
  //     onChange={(e) => setPassword(e.target.value)}
  //   />
  //   <StyledRegTextField
  //     label="Confirm password"
  //     variant="filled"
  //     type="password"
  //     required
  //     value={confirmPassword}
  //     onChange={(e) => setConfirmPassword(e.target.value)}
  //   />
  // <StyledRegButtons>
  //   <StyledLoginButton variant="contained" onClick={handleClose}>
  //     Cancel
  //   </StyledLoginButton>
  //   <StyledLoginButton type="submit" variant="contained" color="primary">
  //     Signup
  //   </StyledLoginButton>
  // </StyledRegButtons>
  //   </StyledRegForm>
};

export default Form;
const StyledRegForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledRegTextField = styled(TextField)`
  margin: 0.5rem 0.5rem;
`;
const StyledRegButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;
