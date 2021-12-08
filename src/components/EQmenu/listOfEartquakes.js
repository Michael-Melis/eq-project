import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { StarBorder, Star } from "@mui/icons-material";

const api = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson";

export const ListOfEartquakes = ({ limit, endDate, startDate, onSubmit }) => {
  const [eqData, setEqData] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [selected, setSelected] = useState([]);

  let newStartDate = new Date(startDate);
  let startDay = !newStartDate ? null : newStartDate.getDate();
  let startMonth = !newStartDate ? null : newStartDate.getMonth();
  let startYear = !newStartDate ? null : newStartDate.getFullYear();

  let newEndDate = new Date(endDate);
  let endDay = !newEndDate ? null : newEndDate.getDate();
  let endMonth = !newEndDate ? null : newEndDate.getMonth();
  let endYear = !newEndDate ? null : newEndDate.getFullYear();

  const newLimit = !limit ? null : limit;
  useEffect(() => {
    const fetchEq = async () => {
      try {
        const res = await axios.get(
          `${api}&limit=${newLimit}&starttime=${startYear}-${
            startMonth + 1
          }-${startDay}&endtime=${endYear}-${endMonth + 1}-${endDay}`
        );

        setEqData(res.data.features);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEq();
  }, [onSubmit]);

  const handleFavorite = () => {
    // setSelected(eqData.filter((eq) => eq.id === oneEq.id));

    setFavorite(!favorite);
  };

  return (
    <div>
      {!eqData
        ? "loading"
        : eqData.map((oneEq) => {
            return (
              <div key={oneEq.id}>
                <h2>Title: {oneEq.properties.place}</h2>
                <p>id: {oneEq.id}</p>
                <a href={oneEq.properties.url} target="_blank">
                  Link to source
                </a>

                <Star onClick={handleFavorite} />
              </div>
            );
            //  <Earthquake oneEq={oneEq} />;
          })}
      {/* <Earthquake eqData={eqData}  /> */}
    </div>
  );
};
