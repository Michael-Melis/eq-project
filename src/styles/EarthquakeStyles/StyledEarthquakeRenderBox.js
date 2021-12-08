import { Box } from "@mui/system";
import styled from "styled-components";
import { Button, TextField } from "@mui/material";

export const StyledEarthquakeBox = styled(Box)`
  border: 3px solid #43a5ca;
  box-shadow: 3px 3px 8px aliceblue;
  display: flex;
  justify-content: center;
  min-height: 20vh;
  padding: 1rem;
  width: 80%;
  margin: auto;
`;

export const StyledEqForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;

  justify-content: space-between;
  p {
    margin: 0;
    text-align: center;
  }
`;

export const StyledEqTextField = styled(TextField)`
  margin: 0.5rem 0;
  background-color: aliceblue;
  &:focus {
    border: 2px solid red;
  }
`;

export const StyledEqButton = styled(Button)`
  background-color: #43a5ca;
  color: black;
  transition: 0.4s ease-in-out all;
  &:hover {
    background-color: aliceblue;
    transition: 0.4s ease-in-out all;
  }
`;
