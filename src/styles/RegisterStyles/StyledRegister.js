import styled from "styled-components";
import { TextField } from "@mui/material";
import { StyledLoginButton } from "../LoginStyles/StyledLoginButton";

export const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

export const StyledRegField = styled(TextField)`
  margin: 0.4rem 0;
`;

export const StyledRegButton = styled(StyledLoginButton)`
  background-color: aliceblue;
`;

export const StyledCancelRegButton = styled(StyledLoginButton)``;
