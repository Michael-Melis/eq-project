import { TextField } from "@mui/material";
import styled from "styled-components";

export const StyledTextField = styled(TextField)`
  background-color: #fff;
  color: #fff;
  margin: 0.4rem 0;
  &:focus {
    border: 3px solid red;
  }
`;
