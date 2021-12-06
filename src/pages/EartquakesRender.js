import React, { useState } from "react";
import { ListOfEartquakes } from "../components/EQmenu/listOfEartquakes";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  StyledEarthquakeBox,
  StyledEqForm,
  StyledEqTextField,
  StyledEqButton,
} from "../muiStyles/EarthquakeStyles/StyledEarthquakeRenderBox";

const schema = yup.object().shape({
  limit: yup.number().min(1).required("Insert number"),
  start: yup.date().required("Insert valid date"),
  end: yup.date().required("Insert valid date"),
});

const EartquakesRender = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [limit, setLimit] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onSubmit = (data) => {
    setStartDate(data.start);

    setEndDate(data.end);
    setLimit(data.limit);
  };

  return (
    <>
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
                required="true"
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
                required="true"
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
                required="true"
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
      {!limit && !startDate && !endDate ? (
        ""
      ) : (
        <ListOfEartquakes
          limit={limit}
          startDate={startDate}
          endDate={endDate}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

export default EartquakesRender;
