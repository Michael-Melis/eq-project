import React from "react";
import { Dialog } from "@mui/material";
import Form from "./Form";

const ModalDialog = ({ open, handleClose, userData }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <Form handleClose={handleClose} userData={userData} />
    </Dialog>
  );
};

export default ModalDialog;
