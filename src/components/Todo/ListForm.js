import { shape } from "@mui/system";
import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import nanoId from "nano-id";

const ListForm = ({ setListArray, listArray }) => {
  const schema = yup.object().shape({
    listName: yup.string().required(),
  });

  const inputRef = useRef(null);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleClick = (data) => {
    setListArray([...listArray, { listName: data.listName, id: nanoId() }]);
  };

  return (
    <form onSubmit={handleSubmit(handleClick)}>
      <Controller
        name="listName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            inputRef={inputRef}
            variant="outlined"
            label="name of new list"
          />
        )}
      />
      <Button type="submit">add new list</Button>
    </form>
  );
};

export default ListForm;
