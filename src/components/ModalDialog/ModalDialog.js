import React from "react";
import { Dialog } from "@mui/material";
import Form from "./Form";

const ModalDialog = ({ open, handleClose, userData }) => {
  return (
    // props received from Login.js
    <Dialog open={open} onClose={handleClose}>
      {/* // form to be created */}

      <Form handleClose={handleClose} userData={userData} />
    </Dialog>
  );
};

export default ModalDialog;
