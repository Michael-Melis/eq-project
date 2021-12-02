import React, { useState } from "react";
import styled from "styled-components";
import { TextField, Button } from "@mui/material";
import { StyledLoginButton } from "../../muiStyles/LoginStyles/StyledLoginButton";

const Form = ({ handleClose }) => {
  // create state variables for each input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    handleClose();
  };

  return (
    <StyledReegForm onSubmit={handleSubmit}>
      <StyledRegTextField
        label="First Name"
        variant="filled"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <StyledRegTextField
        label="Last Name"
        variant="filled"
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <StyledRegTextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <StyledRegTextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledRegButton>
        <StyledLoginButton variant="contained" onClick={handleClose}>
          Cancel
        </StyledLoginButton>
        <StyledLoginButton type="submit" variant="contained" color="primary">
          Signup
        </StyledLoginButton>
      </StyledRegButton>
    </StyledReegForm>
  );
};

export default Form;
const StyledReegForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledRegTextField = styled(TextField)`
  margin: 0.5rem 0.5rem;
`;
const StyledRegButton = styled.div`
  display: flex;
  justify-content: space-between;
`;
