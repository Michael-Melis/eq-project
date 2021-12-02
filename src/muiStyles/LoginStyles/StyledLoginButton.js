import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledLoginButton = styled(Button)`
  margin: 0.2rem 1rem;
  padding: 0rem 2rem;
  color: black;
  border: 1px solid #212227;
  background-color: #fff;
  border-radius: 10px;
  width: 20vh;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #212227;
    color: #fff;
    transition: 0.4s ease-in-out;
  }
`;
