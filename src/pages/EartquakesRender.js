import React, { useEffect, useState } from "react";
import { ListOfEartquakes } from "../components/EQmenu/listOfEartquakes";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from "@mui/material";

const EartquakesRender = () => {
  const { handleSubmit, control } = useForm();
  const [limit, setLimit] = useState(null);

  const onSubmit = (data) => {
    console.log(data.limit);
    setLimit(data.limit);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="limit"
          control={control}
          defaultValue=""
          rules={{ required: "Limit need to be number" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Number of earthquakes"
              variant="filled"
              type="number"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{ required: "Limit need to be number" }}
        />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
        <ListOfEartquakes limit={limit} />
      </form>
    </div>
  );
};

export default EartquakesRender;
