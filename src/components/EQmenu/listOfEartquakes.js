import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Earthquake from "./Eartquake/Earthquake";

const api = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson";

export const ListOfEartquakes = ({ limit, endDate, startDate, onSubmit }) => {
  const [eqData, setEqData] = useState([]);

  useEffect(() => {
    let newStartDate = new Date(startDate);
    let startDay = !newStartDate ? null : newStartDate.getDate();
    let startMonth = !newStartDate ? null : newStartDate.getMonth();
    let startYear = !newStartDate ? null : newStartDate.getFullYear();

    let newEndDate = new Date(endDate);
    let endDay = !newEndDate ? null : newEndDate.getDate();
    let endMonth = !newEndDate ? null : newEndDate.getMonth();
    let endYear = !newEndDate ? null : newEndDate.getFullYear();

    const newLimit = !limit ? null : limit;
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
  console.log(eqData);
  return (
    <div>
      <Earthquake eqData={eqData} />
    </div>
  );
};
