import React, { useState, useEffect } from "react";
import { ListOfEartquakes } from "../components/EQmenu/listOfEartquakes";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  StyledEarthquakeBox,
  StyledEqForm,
  StyledEqTextField,
  StyledEqButton,
} from "../styles/EarthquakeStyles/StyledEarthquakeRenderBox";
import Login from "../components/Login/Login";

const schema = yup.object().shape({
  limit: yup.number().min(1).required("Insert number"),
  start: yup.date().required("Insert valid date"),
  end: yup.date().required("Insert valid date"),
});

const EartquakesRender = ({ user }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [limit, setLimit] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const onSubmit = (data) => {
    setStartDate(data.start);
    setEndDate(data.end);
    setLimit(data.limit);
  };

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <StyledEarthquakeBox>
          <StyledEqForm onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="limit"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <StyledEqTextField
                  {...field}
                  label="Number of earthquakes"
                  required
                  variant="outlined"
                  type="number"
                  error={!!errors.limit}
                  helperText={errors ? errors.limit?.message : ""}
                />
              )}
            />
            <p>Start date </p>
            <Controller
              name="start"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <StyledEqTextField
                  {...field}
                  variant="outlined"
                  required
                  type="date"
                  error={!!errors.start}
                  helperText={errors ? errors.start?.message : ""}
                />
              )}
            />
            <p>End date</p>
            <Controller
              name="end"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <StyledEqTextField
                  {...field}
                  variant="outlined"
                  required
                  type="date"
                  error={!!errors.end}
                  helperText={errors ? errors.end?.message : ""}
                />
              )}
            />
            <StyledEqButton type="submit" variant="contained" color="primary">
              Search
            </StyledEqButton>
          </StyledEqForm>
        </StyledEarthquakeBox>
      )}

      <ListOfEartquakes
        limit={limit}
        startDate={startDate}
        endDate={endDate}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default EartquakesRender;
